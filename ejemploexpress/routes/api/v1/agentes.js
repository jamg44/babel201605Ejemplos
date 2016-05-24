"use strict";

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Agente = mongoose.model('Agente');

var auth = require('../../../lib/auth');
//router.use(auth('1234'));

var basicAuth = require('../../../lib/basicAuth');
//router.use(basicAuth('admin', '1234'));

var jwtAuth = require('../../../lib/jwtAuth');
router.use(jwtAuth());

/**
 * Lista de agentes
 */
router.get('/', function(req, res) {

    console.log('req.decoded', req.decoded);

    var name = req.query.name;
    var start = parseInt(req.query.start) || 0;
    var limit = parseInt(req.query.limit) || 99999;
    var sort = req.query.sort || '';

    var query = {};

    if (typeof(name) !== 'undefined') {
        query.name = name;
    }

    // recuperar lista de agentes
    Agente.list(query, start, limit, sort, function(err, rows) {
        if (err) {
           return res.json({ok: false, error: err});
        }
        res.json({ok: true, rows: rows});
    });
});


module.exports = router;
