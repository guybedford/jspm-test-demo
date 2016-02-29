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
  run(process.argv[4], 'json')
  .then(function(output) {
    System._nodeRequire('fs').writeFileSync('coverage.json', output);
  });

export function run(tests, coverageType) {
  var coverage;
  return Promise.resolve()
  .then(() => {
    if (coverageType)
      return System.import('./coverage.js', __moduleName)
      .then((m) => {
        coverage = m;
        var testDir = System.normalizeSync(tests).split('/').slice(0, -1).join('/');
        m.attach(System, (fileName) => {
          return fileName.indexOf('jspm_packages') != -1 || fileName.indexOf(testDir) == 0;
        });
      });
  })
  .then(() => {
    if (typeof tests == 'string')
      return System.import(tests);
    else
      return tests;
  })
  .then((tests) => {
    var runner = new Mocha({
      ui: 'exports',
      reporter: isBrowser ? 'html': 'spec',
      useColors: !isBrowser
    });

    // emit the tests as if required through the exports interface
    runner.suite.emit('require', tests);

    return new Promise((resolve, reject) => {
      runner.run((failures) => {
        if (failures)
          reject(failures);
        else
          resolve();
      });
    });
  })
  .then(() => {
    if (coverageType)
      return coverage.report(coverageType === true ? undefined : coverageType);
  })
  .catch((e) => {
    setTimeout(() => {
      throw e;
    });
  });
}