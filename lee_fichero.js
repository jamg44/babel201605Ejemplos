"use strict";

// cargar modulo de node filesystem
var fs = require('fs');


// leer fichero
fs.readFile('./hoisting.js', 'utf8', function(err, data) {
    // cuando haya leido el fichero readFile llamará a esta funcion de callback
    if (err) {
        console.log('Errror', err);
        return;
    }

    // si no ha habido error
    // escrbir su contenido
    console.log(data);
    
});

console.log('fin');
