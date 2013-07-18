var Request = require('./request').Request;

function Translations(opts) {
  this.request = new Request(opts.username, opts.api_token);
}

Translations.prototype.translate = function(text, from, to, callback) {
  this.request.post('/translate', {
    text: text,
    from: from,
    to: to
  }, callback);
};

exports.Translations = Languages;