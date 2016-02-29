import istanbul from 'istanbul';

let istanbulGlobal;

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
    coverageVariable: istanbulGlobal,
    esModules: true
  });

  let loaderTranslate = loader.translate;
  loader.translate = function(load) {
    if (load.metadata.format == 'json' || load.metadata.format == 'defined' || load.metadata.loader)
      return loaderTranslate.call(this, load);

    // excludes
    if (exclude(load.address))
      return loaderTranslate.call(this, load);

    try {
      load.source = instrumenter.instrumentSync(load.source, load.address.substr(System.baseURL.length));
    }
    catch (e) {
      var newErr = new Error('Unable to instrument "' + load.name + '" for istanbul.\n\t' + e.message);
      newErr.stack = 'Unable to instrument "' + load.name + '" for istanbul.\n\t' + e.stack;
      newErr.originalErr = e.originalErr || e;
      throw newErr;
    }
    return loaderTranslate.call(this, load);
  };
  loader.translate.coverageAttached = true;
}

export function report(type = 'text') {
  var collector = new istanbul.Collector();

  collector.add(System.global[istanbulGlobal]);

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