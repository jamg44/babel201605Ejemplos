"use strict";

var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.log.bind(console, 'mongoose connection error:'));

db.once('open', function() {
    console.log('Connected to MongoDB');
});

mongoose.connect('mongodb://localhost/cursonode');
