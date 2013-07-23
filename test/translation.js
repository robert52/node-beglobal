var BeglobalAPI = require('../lib/beglobal').BeglobalAPI;
var configs = require('../lib/config.js');
var beglobal = new BeglobalAPI(configs);

beglobal.translations.translate('hello', 'eng', 'fra', function(err, results) {
  if (err) {
    return console.log(err);
  }

  console.log(results);
});