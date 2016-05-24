"use strict";

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('User');

var jwt = require('jsonwebtoken');
var localConfig = require('../../../local_config');

// Registro del usuario
router.post('/', function(req, res) {

    // añadir un usuario a la base de datos
    var user = new User({
        email: req.body.email,
        pass: req.body.pass
    });

    console.log(user);

    user.save(function(err, row) {
        if (err) {
            return res.json({ok: false, error: err});
        }

        res.json({ok: true, user: row});

    });

});

router.post('/authenticate', function(req, res) {
    var email = req.body.email;
    var pass = req.body.pass;

    User.findOne({email: email}).exec(function(err, user) {
        if (err) {
            res.json({ok: false, error: err});
            return;
        }

        console.log(user);

        if (!user) {
            return res.json({ok: false, error: 'user not found'});
        }

        if (user.pass !== pass) {
            return res.json({ok: false, error: 'password wrong'});
        }

        // evitar meter el usuario de mongoose en el token
        // poner solo el id
        var token = jwt.sign({id: user._id}, localConfig.jwt.secret, {
            expiresIn: '2 days'
        });

        res.json({ok: true, token: token});

    });

});

module.exports = router;