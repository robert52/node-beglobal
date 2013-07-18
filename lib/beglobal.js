var Languages = require('./languages.js').Utility;

function BeglobalAPI(opts) {
  this._configure(opts);
}

BeglobalAPI.prototype._configure = function(opts) {
  this.languages = new Languages(opts);
};

exports.BeglobalAPI = BeglobalAPI;
exports.Languages = Languages;