"use strict";

// closure que crea agentes
function creaAgente(nombre) {
    var edad = 0;
    return {
        ponNombre: function (nuevoNombre) {
            nombre = nuevoNombre;
        },
        leeNombre: function () {
            console.log(nombre);
            return nombre;
        },
        ponEdad: function(nuevaEdad) {
            edad = nuevaEdad;
        },
        leeEdad: function () {
            return edad;
        }
    }
}

var smith = creaAgente('Smith');
smith.ponEdad(33);

console.log(smith.leeNombre(), smith.leeEdad());

var jones = creaAgente('Jones');

console.log(smith.leeNombre(), smith.leeEdad());
console.log(jones.leeNombre(), jones.leeEdad());

smith.ponNombre('Nuevo Smith');

console.log(smith.leeNombre(), smith.leeEdad());
console.log(jones.leeNombre(), jones.leeEdad());

setTimeout(jones.leeNombre, 2000);