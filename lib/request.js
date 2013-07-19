var https = require('https');
https.globalAgent.options.secureProtocol = 'SSLv3_method';

function Request(username, api_token) {
  this.api_token = api_token;
  this.base_url = 'https://api.beglobal.com';
  this.host = '';
}

Request.prototype.getOpts = function(type, endpoint, params) {
  var obj = {
    hostname: this.host,
    method: type,
    path: this.base_url + endpoint,
    headers: {
      'Authorization': 'BeGlobal apiKey=' + this.api_token
    }
  };

  obj.params = JSON.stringify(params);
  obj.headers['Content-Length'] = params.length;
  obj.headers['Content-Type'] = 'application/json';

  return obj;
};

Request.prototype.get = function(method, params, callback) {
  //execute get call
};

Request.prototype.post = function(endpoint, params, callback) {
  this.execute(this.getOpts('POST', endpoint, params), callback);
};

Request.prototype.del = function(endpoint, callback) {
  //execute delete call
};

Request.prototype.put = function(endpoint, params, callback) {
  //execute update call
};

Request.prototype.execute = function(opts, callback) {
  var params = opts.params;
  delete opts.params;

  var req = https.request(opts, function(res) {
    var chunks = '';

    res.on('data', function(data) {
      chunks += data;
    });

    res.on('end', function() {
      callback(null, JSON.parse(chunks));
    });
  });

  if (params) {
    req.write(params);
  }

  req.on('error', callback);
  req.end();
}

exports.Request = Request;