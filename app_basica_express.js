"use strict";

var express = require('express');
var app = express();

var morganLogger = require('morgan'); // https://github.com/expressjs/morgan

// Middlewares

app.use(morganLogger('dev')); // probar combined

app.get('/', function (req, res, next) {
    console.info('middleware en GET / llamado!');
    next();
});

app.all('/admin', function (req, res, next) {
    console.log('Accediendo a sección admin ...');
    req.user = 'pepe';
    next(); // pasa el control al siguiente handler
});

// Handlers

app.get('/', function (req, res) {
    console.log('llamada a GET /');
    res.send('Hello World!');
});

app.get('/admin', function (req, res) {
    console.log( req.user + ' llamada a GET /admin');
    res.send('Esto es admin');
});

// Arranque

var server = app.listen(3000, function () {

    //var host = server.address().address;
    var port = server.address().port;

    console.log('*** Example app listening at port %s', port);

});