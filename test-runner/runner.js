import Mocha from 'mocha';

const isBrowser = typeof document != 'undefined';

if (!isBrowser)
  Mocha.process.stdout = process.stdout;

if (isBrowser) {
  let mochaContainer = document.querySelector('#mocha');
  if (!mochaContainer) {
    mochaContainer = document.createElement('div');
    mochaContainer.id = 'mocha';
    document.body.appendChild(mochaContainer);
  }
}

// allow jspm run runner test/file.js
if (typeof process != 'undefined' && process.argv && process.argv[4])
  run(process.argv[4], true);

export function run(tests, coverage) {
  return Promise.resolve()
  .then(function() {
    if (coverage)
      return System.import('coverage.js')
      .then(function(m) {
        coverage = m;
        var testDir = System.normalizeSync(tests).split('/').slice(0, -1).join('/');
        m.attach(System, function(fileName) {
          return fileName.indexOf('jspm_packages') != -1 || fileName.indexOf(testDir) == 0;
        });
      });
  })
  .then(function() {
    if (typeof tests == 'string')
      return System.import(tests);
    else
      return tests;
  })
  .then(function(tests) {
    var runner = new Mocha({
      ui: 'exports',
      reporter: isBrowser ? 'html': 'spec',
      useColors: !isBrowser
    });

    // emit the tests as if required through the exports interface
    runner.suite.emit('require', tests);

    return new Promise(function(resolve, reject) {
      runner.run(function(failures) {
        if (failures)
          reject(failures);
        else
          resolve();
      });
    });
  })
  .then(function() {
    if (coverage)
      coverage.report();
  })
  .catch(function(e) {
    setTimeout(function() {
      throw e;
    });
  });
}