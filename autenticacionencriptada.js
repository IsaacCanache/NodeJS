const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Conectar a la base de datos
mongoose.connect('mongodb://localhost/myDatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Configurar Passport
passport.use(new LocalStrategy(
 function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }

      return done(null, user);
    });
 }
));
