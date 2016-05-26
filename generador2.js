"use strict";

// funcion que espera con callback
function espera(milis, n, cb) {
  setTimeout(() => {
      return cb('fin', {a: n});
  }, milis);
}


// consumir la función de forma secuencial

run( function*(sigue) {

  for (let i = 0; i< 10; i++) {
    let res = yield espera(1000, i, sigue);

    console.log(res);
  }

});


// funcion ayudante
function run(generatorFn) {
  let iterador = generatorFn(sigue);
  function sigue() {
    var args = Array.prototype.slice.call(arguments);
    iterador.next(args);
  }
  iterador.next();
}


