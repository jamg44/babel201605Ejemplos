"use strict";

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/cursonode', function(err, db) {
    if (err) {
        console.log('Error al conectar', err);
        return process.exit(1);
    }

    db.collection('agentes').find().toArray(function(err, docs) {
        if (err) {
            console.log('Error al recuperar agentes', err);
            return process.exit(1);
        }

        console.log(docs);
        db.close();
    });
});
