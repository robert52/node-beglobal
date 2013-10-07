var chai = require('chai');
var should = chai.should();
var BeglobalAPI = require('../lib/beglobal').BeglobalAPI;
var configs = require('../lib/config.js');
var beglobal = new BeglobalAPI(configs);

describe('Translations', function() {
  it('should get a translation', function(done) {
    beglobal.translations.translate({text: 'Hello', from: 'eng', to: 'fra'}, function(err, results) {
      console.log(err, results);
      should.not.exist(err);
      should.exist(results);
      done();
    });
  });
});