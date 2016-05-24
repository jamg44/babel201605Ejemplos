"use strict";

var basicAuth = require('basic-auth');

module.exports = function(username, password) {
    return function(req, res, next) {
      var user = basicAuth(req);

      // comprobamos si no hay usuario
      if (!user || user.name !== username || user.pass !== password) {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return res.send(401);
      }

      // si coincide continuo
      next();

    }
};