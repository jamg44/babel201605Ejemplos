"use strict";

// encadenar promesas

function conArroz(plato) {
  return new Promise(function(resolve, reject) {
      resolve(plato + ' arroz');
  });
}

function conAjo(plato) {
  return new Promise(function(resolve, reject) {
      resolve(plato + ' ajo');
      //reject('quemado el plato');
  });
}

function con(plato, ing) {
  return new Promise(function(resolve, reject) {
      resolve(plato + ' ' + ing);
  });
}

var paella = 'paella con';

conArroz(paella)

  .then( conAjo )

  .then( function(plato) {
     return con(plato, 'sal');
  })

  // .catch podremos gestionar errores parciales, no olvidar devolver promesa

  .then(function (plato) {
    console.log(plato);
  })

  .catch(function (err) {
    console.log('Error', err);
  });















