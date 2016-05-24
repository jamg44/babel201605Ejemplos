"use strict";

var jwt = require('jsonwebtoken');
var localConfig = require('../local_config');

module.exports = function() {

  return function(req, res, next) {
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        if (!token) {
            var err = { status: 403, message: 'token not found' };
            return next(err);
        }

        jwt.verify(token, localConfig.jwt.secret, function(err, decoded) {
            if (err) {
              var err = { status: 403, message: 'invalid token' };
              return next(err);
            }

            req.decoded = decoded;

            next();

        });

    };
};
