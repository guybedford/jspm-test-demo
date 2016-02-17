import expect from 'unexpected';

export default {
  'amd.js': function() {
    return System.import('app/amd.js')
    .then(function(amd) {
      expect(amd.fn(), 'to equal', 5);
    });
  },

  'cjs.js': function() {
    return System.import('app/cjs.js')
    .then(function(cjs) {
      expect(cjs, 'to equal', 'hello world');
    });
  },

  'es6.js': function() {
    return System.import('app/es6.js')
    .then(function(es6) {
      es6.a();
    });
  }
}