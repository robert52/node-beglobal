var Request = require('./request').Request;

function Languages(opts) {
  this.request = new Request(opts.username, opts.api_token);
}

Languages.prototype.all = function(callback) {
  this.request.get('/languages', callback);
};

exports.Languages = Languages;