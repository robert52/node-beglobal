var Languages = require('./languages.js').Languages;
var Translations = require('./translations.js').Translations;
var configs = require('./config.js');

console.log(Languages, Translations);

function BeglobalAPI(opts) {
  this._configure(opts);
}

BeglobalAPI.prototype._configure = function(opts) {
  this.languages = new Languages(opts);
  this.translations = new Translations(opts);
};

var beglobal = new BeglobalAPI(configs);

beglobal.translations.translate('hello', 'eng', 'fra', function(err, results) {
  console.log(err, results);
});

exports.BeglobalAPI = BeglobalAPI;
exports.Languages = Languages;