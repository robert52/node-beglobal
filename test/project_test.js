var chai = require('chai');
var should = chai.should();
var BeglobalAPI = require('../lib/beglobal').BeglobalAPI;
var configs = require('../lib/config.js');
var beglobal = new BeglobalAPI(configs);
var utils = require('../lib/utils.js');

describe('Projects', function() {
  var addedProject;

  it('should create a new project', function(done) {
    beglobal.projects.create({
      type: 'translationProject',
      from: 'eng',
      to: 'fra',
      description: 'My Test Project'
    }, function(err, results) {
      should.not.exist(err);
      should.exist(results);
      results.success.should.equal(true);
      results.project.type.should.equal('translationProject');
      results.project.description.should.equal('My Test Project');

      addedProject = results.project;

      done();
    });
  });

  it('should get all projects', function(done) {
    beglobal.projects.all(function(err, results) {
      should.not.exist(err);
      should.exist(results);
      done();
    });
  });

  it('should get a project by id', function(done) {
    beglobal.projects.get(addedProject.id, function(err, results) {
      should.not.exist(err);
      should.exist(results);
      results.success.should.equal(true);
      results.project.id.should.equal(addedProject.id);
      done();
    });
  });
});