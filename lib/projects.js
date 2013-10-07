var Request = require('./request').Request;

function Projects(opts) {
  this.request = new Request(opts.username, opts.api_token);
}

Projects.prototype.create = function(projectObject, callback) {
  this.request.post('/projects', projectObject, callback);
};

Projects.prototype.all = function(callback) {
  this.request.get('/projects', callback);
};

Projects.prototype.get = function(id, callback) {
  this.request.get('/projects/' + id, callback);
};

exports.Projects = Projects;