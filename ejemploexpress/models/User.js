"use strict";

var mongoose = require('mongoose');

var userSquema = mongoose.Schema({
  email: String,
  pass: String
});

var User = mongoose.model('User', userSquema);
