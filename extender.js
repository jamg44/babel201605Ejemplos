"use strict";

var one = {
    id: 123,
    desc: 'soy el number one',
    title: 'One'
};

var two = {
    name: 'Me llamo Two',
    amigos: ['four', 'six']
};

var extra = {
    id: 456,
    amigos: ['nine']
};

var extendido = Object.assign(one, two, extra);

console.log(one);
console.log(two);
console.log(extra);
console.log(extendido);
