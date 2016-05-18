"use strict";

var persona = {
    name: 'Luis',
    surname: 'Gomez',
    fullName: function() {
        var self = this;
        console.log(this.name + ' ' + this.surname);
    }
};

persona.fullName();

setTimeout(persona.fullName.bind(persona), 1000);