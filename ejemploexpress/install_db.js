"use strict";

var mongoose = require('mongoose');
var readline = require('readline');
var async = require('async');
var fs = require('fs');

var db = require('./lib/connectMongoose');

require('./models/Agente');

db.once('open', function() {

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Estas seguro que quieres borrar la BD y cargar de cero (no) ', function(answer) {
    rl.close();
    if (answer.toLowerCase() === 'si') {
      return install();
    }
    console.log('Inicialización abortada!');
    process.exit(0);
  })

});

function install() {

  var Agente = mongoose.model('Agente');
  
  fs.readFile('./agentes.json', 'utf8', (err, data) => {
    if (err) {
      console.error('No puede leer agentes.json');
      return process.exit(1);
    }

    var agentes;

    try {
      agentes = JSON.parse(data);
    } catch(err) {
      console.error('No puede leer agentes.json');
      return process.exit(2);
    }


    async.eachSeries(agentes.agentes, function cadaAgente(agente, cb) {
      console.log('agente', agente);

      var newAgente = new Agente(agente);

      newAgente.save().then(res => {
        cb();
      }).catch(err => {
        cb(err);
      });

    }, function final(err) {
      if (err) {
        console.log('Error de carga!!', err);
      }

      console.log('Carga terminada sin errores');
      process.exit(0);
    });

  });


}