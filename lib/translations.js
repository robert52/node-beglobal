var Request = require('./request').Request;

function Translations(opts) {
  this.request = new Request(opts.username, opts.api_token);
}

Translations.prototype.translate = function(translationObject, callback) {
  this.request.post('/translate', {
    text: translationObject.text,
    from: translationObject.from,
    to: translationObject.to
  }, callback);
};

exports.Translations = Translations;