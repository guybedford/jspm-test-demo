import istanbul from 'istanbul';
import remap from 'remap-istanbul/lib/remap.js';
import process from 'process';
import fs from 'fs';

let istanbulGlobal;

var originalSources = {};

export function attach(loader, exclude) {
  if (loader.translate.coverageAttached)
    return;

  // attach istanbul coverage creation
  if (typeof global != 'undefined' && !istanbulGlobal)
    for (var g in global) {
      if (g.match(/\$\$cov_\d+\$\$/)) {
        istanbulGlobal = g;
        break;
      }
    }
  istanbulGlobal = istanbulGlobal || '__coverage__';

  let instrumenter = new istanbul.Instrumenter({
    coverageVariable: istanbulGlobal
  });

  let loaderTranslate = loader.translate;
  loader.translate = function(load) {
    var originalSource = load.source;
    return loaderTranslate.call(this, load)
    .then(function(source) {
      if (load.metadata.format == 'json' || load.metadata.format == 'defined' || load.metadata.loader)
        return source;      

      // excludes
      if (exclude(load.address))
        return source;

      originalSources[load.name] = {
        source: originalSource,
        sourceMap: load.metadata.sourceMap
      };

      try {
        return instrumenter.instrumentSync(source, load.address.substr(System.baseURL.length));
      }
      catch (e) {
        var newErr = new Error('Unable to instrument "' + load.name + '" for istanbul.\n\t' + e.message);
        newErr.stack = 'Unable to instrument "' + load.name + '" for istanbul.\n\t' + e.stack;
        newErr.originalErr = e.originalErr || e;
        throw newErr;
      }
    });
  };
  loader.translate.coverageAttached = true;
}

export function report(type = 'text') {
  var coverage = System.global[istanbulGlobal];

  coverage = coverage || {};

  // remap expects a process global
  System.global.process = process;

  var collector = remap(coverage, {
    readFile(path) {
      return originalSources[System.baseURL + path].source + 
        (originalSources[System.baseURL + path].sourceMap ? '\n//# sourceMappingURL=' + path.split('/').pop() + '.map' : '');
    },
    readJSON(path) {
      var pathBase = System.baseURL + path.split('/').slice(0, -1).join('/');

      var originalSourcesObj = originalSources[System.baseURL + path.substr(0, path.length - 4)];

      // non transpilation-created source map -> load the source map file directly
      if (!originalSourcesObj || !originalSourcesObj.sourceMap)
        return JSON.parse(fs.readFileSync(System.baseURL + path));

      var sourceMap = originalSourcesObj.sourceMap;
      if (typeof sourceMap == 'string')
        sourceMap = JSON.parse(sourceMap);

      sourceMap.sources = sourceMap.sources.map((src) => {
        if (src.substr(0, pathBase.length) == pathBase)
          src = './' + src.substr(pathBase.length);
        return src;
      });
      return sourceMap;
    },
    warn: function(msg) {
      if (msg.toString().indexOf('Could not find source map for') != -1)
        return;
      console.warn(msg);
    }
  });

  var fileData = [];
  var fileName;
  var writer = {
    on(evt, fn) {
      if (evt == 'done')
        this.done = fn;
    },
    writeFile(name, write) {
      fileName = fileName || name;
      if (fileName != name)
        throw new Error('Multiple file outputs not currently supported.');
      var contentWriter = {
        println(line) {
          fileData.push(line + '\n');
        },
        write(data) {
          fileData.push(data);
        }
      };
      write(contentWriter);
    },
    done(d) {
      this.done();
    }
  };

  var cfg = {
    reporting: {
      reportConfig: (a) => {
        return {
          [type]: {
            writer: writer
          }
        };
      },
      watermarks: () => {},
    }
  };

  var reporter = new istanbul.Reporter(cfg, '.');
  reporter.add(type);

  return new Promise((resolve, reject) => reporter.write(collector, false, resolve))
  .then(() => fileData.join(''));
}