"use strict";

var fs = require('fs');

function leeFichero(nomfile) {
  return new Promise(function(resolve, reject) {
      fs.readFile(nomfile, 'utf8', function(err, data) {
          if (err) {
            reject(err);
            return;
          }
          resolve(data);
      });
  });
}

leeFichero('./this.js').then(function (data) {
    console.log('data', data);
}).catch(function(err) {
    console.log('Error', err);
});
