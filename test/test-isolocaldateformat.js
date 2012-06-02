(function () {
  var df = require('../lib/isolocaldateformat.js').ISOLocalDateFormat;

  var _case = {};

  _case['format'] = function (test) {
    var dt = new Date(2012, 6 - 1, 2, 16, 43, 53, 987);
    test.deepEqual(df.format(dt), '2012-06-02T16:43:53.987');
    test.done();
  };

  module.exports = require('nodeunit').testCase(_case);

})();
