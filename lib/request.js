var https = require('https');

function Request(username, api_token) {
  this.api_token = api_token;
  this.base_url = '';
  this.host = '';
}

Request.prototype.get = function(method, params, callback) {
  //execute get call
};

Request.prototype.post = function(method, params, callback) {
  //execute post call
};

Request.prototype.del = function(method, callback) {
  //execute delete call
};

Request.prototype.put = function(method, params, callback) {
  //execute update call
};

Request.prototype.execute = function(opts, callback) {
  //execute function logic here
}

exports.Request = Request;