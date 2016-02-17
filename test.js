var jspm = require('jspm');
jspm.import('test-runner').then(function(runner) {
  return runner.run('example-tests/index.js', true);
});