const passport = require('passport');
const passportJWT = require('passport-jwt');

const UserDao = require('./Infra/UserDao');
const cfg = require('./config');

const ExtractJwt = passportJWT.ExtractJwt;
const userDao = new UserDao();
const Strategy = passportJWT.Strategy;

const params = {
  secretOrKey: cfg.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken
};

module.exports = () => {

  const strategy = new Strategy(params, async (payload, done) => {
    const user = await userDao.findById(payload.id);
    if(user) {
      return done(null, {id: user.id});
    } else {
      return done(new Error('User not found'), null);
    }
  });

  passport.use(strategy);
  return {
    initialize: () => {
      return passport.initialize();
    },
    authenticate: () => {
      return passport.authenticate('jwt', cfg.jwtSession);
    }
  }
}