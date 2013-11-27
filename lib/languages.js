var Request = require('./request').Request;

function _normalizeLanguagePairs(data) {
  if (!data) return [];

  var temp = [];
  var lang = data.languageExpertise["Q1"];

  for (var i in lang) {
    temp.push(lang[i]["languagePair"]);
  }

  return temp;
}

function Languages(opts) {
  this.request = new Request(opts.username, opts.api_token);
}

Languages.prototype.all = function(callback) {
  this.request.get('/languages/?quality=Q1', function(err, data) {
    callback(err, _normalizeLanguagePairs(data));
  });
};

exports.Languages = Languages;