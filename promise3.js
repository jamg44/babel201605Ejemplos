"use strict";

function echar(ing) {
  return new Promise(function(resolve, reject) {
    process.nextTick(function() {
      resolve(ing + ' echado');
    });
  });
}

var ingredientes = ['sal', 'pimienta', 'conejo', 'gambas'];

var promiseArray = ingredientes.map(echar);

console.log(promiseArray);

Promise.all(promiseArray).then(function(data) {
  console.log(data);
}).catch(function(err) {

});
