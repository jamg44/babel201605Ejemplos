"use strict";

/**
 * Middleware de autenticacion super simple
 * @param clave
 * @return {Function}
 */
var auth = function(clave) {
  return function (req, res, next) {
    if (req.query.pass !== clave) {
      return next('password wrong');
    }
    return next();
  };
};

module.exports = auth;