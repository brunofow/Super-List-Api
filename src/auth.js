const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');

const UserDao = require('./Infra/UserDao');

const userDao = new UserDao();

module.exports = function(passport) {


  passport.serializeUser((user, done) => {
    done(null, user.id);
  })

  passport.deserializeUser((id, done) => {

  })
}