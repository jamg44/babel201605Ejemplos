"use strict";

function Coche() {
    this.ruedas = 4;
    this.cuantaRuedas = function () {
        console.log('tiene ' + this.ruedas);
    }
}

function leeFichero(fichero, callback) {
    // ...
    callback();
}


var coche = new Coche();

coche.cuantaRuedas();

//setTimeout(coche.cuantaRuedas.bind(coche), 2000);

leeFichero('package.json', coche.cuantaRuedas.bind(coche));
