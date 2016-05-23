"use strict";

var mysql = require('mysql');

// crear objeto de conexión
var connection = mysql.createConnection({
    host     : 'didimo.es',
    user     : 'usuariocurso',
    password : 'us3r',
    database : 'cursonode'
});

// conectar
connection.connect(function(err) {
    if (err) {
        console.log('Error en la conexión a Mysql!');
        process.exit(1);
        return;
    }
    console.log('Conectado a Mysql');
});

// lanzar una query
connection.query('SELECT * from agentes', function(err, rows, fields) {
    if (err) {
        return console.error('Error en la consulta!!', err);
    }
    for (var i = 0; i < rows.length; i++) {
        var agente = rows[i];
        console.log(agente);
    }
});

// cerrar conexión
connection.end();