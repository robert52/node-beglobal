var Languages = require('./languages.js').Languages;
var Translations = require('./translations.js').Translations;

function BeglobalAPI(opts) {
  this._configure(opts);
}

BeglobalAPI.prototype._configure = function(opts) {
  this.languages = new Languages(opts);
  this.translations = new Translations(opts);
};

exports.BeglobalAPI = BeglobalAPI;
exports.Languages = Languages;