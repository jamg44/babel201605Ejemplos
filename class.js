"use strict";

class Agente {
  constructor(name) {
    this._name = name;
    this._edad = 22;
  }

  static soyEstatico() {
    console.log('estatico');
  }

  sayHello() {
    console.log(this._name + ' dice hola!');
  }

  get edad() {
    return this._edad;
  }

  set edad(nuevaEdad) {
    this._edad = nuevaEdad;
  }

}

Agente.soyEstatico();

let agente = new Agente('Smith');

agente.sayHello();

console.log(agente.edad);

agente.edad = 33;

console.log(agente.edad);