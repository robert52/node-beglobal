var chai = require('chai');
var should = chai.should();
var BeglobalAPI = require('../lib/beglobal').BeglobalAPI;
var configs = require('../lib/config.js');
var beglobal = new BeglobalAPI(configs);
var utils = require('../lib/utils.js');

describe('Languages', function() {
  it('should get all language pairs', function(done) {
    beglobal.languages.all(function(err, results) {
      utils.writeDataToLog(results, function(fsErr) {
        should.not.exist(err);
        should.exist(results);
        done();
      });
    });
  });
});