"use strict";

var Persona = function (nombre) {
    this.nombre = nombre;
};

var persona = new Persona('Neo');

var Agente = function(nombre) {
    Persona.call(this, nombre);
};

Agente.prototype = new Persona('soy un prototipo');

Agente.prototype.vuela = function() {
    console.log(this.nombre + ' vuela');
};

var agente = new Agente('Smith');

console.log(agente.nombre);
agente.vuela();

// herencia multiple

var matrixMixin = {
    esquivaBalas: function () {
        console.log(this.nombre + ' esquiva balas');
    }
};

Agente.prototype = Object.assign(Agente.prototype, matrixMixin);

var trinity = new Persona('Trinity');

// trinity.vuela(); // se lo pusimos a los agentes

// trinity.esquivaBalas();

agente.esquivaBalas();
agente.vuela();