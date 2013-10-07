var fs = require('fs');

module.exports = {
  writeDataToLog: function(data, callback) {
    fs.writeFile('logs/response.txt', JSON.stringify(data, null, 4), function(err) {
      if (err) {
        return callback(err);
      }

      callback(null);
    });
  }
};