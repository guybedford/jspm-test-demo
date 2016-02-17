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

  var instrumenter = new istanbul.Instrumenter({
    coverageVariable: istanbulGlobal,
    esModules: true
  });

  var loaderTranslate = loader.translate;
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

export function report() {
  var collector = new istanbul.Collector();

  collector.add(System.global[istanbulGlobal]);

  // istanbul config hack!
  /* var fileData = {};
  var writer = {
    on(evt, fn) {},
    writeFile(name, write) {
      var curData = fileData[name] = fileData[name] || [];
      var contentWriter = {
        println(line) {
          curData.push(line + '\n');
        },
        write(data) {
          curData.push(data);
        }
      };
      write(contentWriter);
    },
    done() {
      document.body.innerHTML = fileData['/index.html'];
    }
  }; */

  var cfg = {
    reporting: {
      reportConfig: function(a) {
        return {
          /* html: {
            dir: '.',
            file: 'asdf',
            writer: writer
          } */
        };
      },
      watermarks: function() {},
    }
  };
  var reporter = new istanbul.Reporter(cfg, '.');
  if (typeof window == 'undefined')
    reporter.add('text');
  else
    reporter.add('text');

  return new Promise(function(resolve, reject) {
    reporter.write(collector, false, resolve);
  });
}