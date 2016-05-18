"use strict";

var events = require('events');
var eventEmitter = new events.EventEmitter();

var suenaTelefono = function(data) {
    if (data !== 'madre') {
        console.log('ring ring');
    }
};

var vibrarTelefono = function (data) {
    console.log('brrr brrr');
};

eventEmitter.on('llamada de telefono', suenaTelefono);

eventEmitter.on('llamada de telefono', vibrarTelefono);

eventEmitter.emit('llamada de telefono', 'madre');

