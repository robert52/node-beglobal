var https = require('https');
https.globalAgent.options.secureProtocol = 'SSLv3_method';

function Request(username, api_token) {
  this.api_token = api_token;
  this.base_url = 'https://api.beglobal.com';
  this.host = 'api.beglobal.com';
}

Request.prototype.getOpts = function(type, endpoint, params) {
  var obj = {
    host: 'api.beglobal.com',
    hostname: 'api.beglobal.com',
    method: type,
    path: this.base_url + endpoint,
    headers: {
      'Authorization': 'BeGlobal apiKey=o%2FxOPgQ9Db81gN4TvtYXqQ%3D%3D'
    }
  };

  params = JSON.stringify(params);
  obj.params = params;
  obj.headers['Content-Length'] = params.length;
  obj.headers['Content-Type'] = 'application/json';
  obj.headers['Cache-Control'] = 'no-cache';

  return obj;
};

Request.prototype.get = function(endpoint, params, callback) {
  if (typeof params === 'function') {
    callback = params;
    params = {};
  } else if (typeof params === 'undefined' && typeof callback !== 'function') {
    return callback({ status: 'error', message: 'Missing argument callback.'});
  }

  this.execute(this.getOpts('GET', endpoint, params), callback);
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

    //console.log('status code: ', res.statusCode);
    //console.log('headers: ', res.headers);

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