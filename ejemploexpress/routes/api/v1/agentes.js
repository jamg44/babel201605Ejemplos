"use strict";

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Agente = mongoose.model('Agente');

/**
 * Lista de agentes
 */
router.get('/', function(req, res) {

    var name = req.query.name;
    var start = parseInt(req.query.start) || 0;
    var limit = parseInt(req.query.limit) || 99999;

    var query = {};

    if (typeof(name) !== 'undefined') {
        query.name = name;
    }

    // recuperar lista de agentes
    Agente.list(query, start, limit, function(err, rows) {
        if (err) {
           return res.json({ok: false, error: err});
        }
        res.json({ok: true, rows: rows});
    });
});

module.exports = router;
