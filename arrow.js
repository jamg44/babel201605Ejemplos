"use strict";

function Persona(name) {
  this.name = name;
}

var persona = new Persona('Neo');

Persona.prototype.saluda = () => {
  console.log('Hola me llamo ' + this.name);
};

setTimeout(persona.saluda, 2000);


let fun = function (name, age) {
  return name + age;
}

let arrow = (name, age) => (name + age);

