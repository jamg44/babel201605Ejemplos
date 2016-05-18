"use strict";

function Persona(name) {
    this.name = name;
}

var persona = new Persona('Neo');

Persona.prototype.saluda = function () {
    console.log('Hola me llamo ' + this.name);
};

console.log(persona);

persona.saluda();

// Herencia de prototipos

function Agente(name) {
    Persona.call(this, name);
    // esto ejecuta el constructor de Persona con
    // el this de Agente y nuestro name
}

// asignamos como prototipo una persona
Agente.prototype = new Persona('soy un prototipo!!!');

var agente = new Agente('Smith');

agente.saluda();

console.log(
    Object.getPrototypeOf(agente),
    agente instanceof Agente,
    agente instanceof Persona,
    agente instanceof Object
);

Agente.prototype.saluda = function() {
    console.log('Adios soy ' + this.name);
};

persona.saluda();
agente.saluda();