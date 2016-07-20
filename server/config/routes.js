// require Users controller and Spots controller
var SpotController = require('../spot/spotController.js');
var UserController = require('../users/userController.js');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var User = require('../users/userModel.js');

passport.use(new Strategy(function(username, password, cb) {
  User.findOne({username: username}, function(err, user) {
    if (err) {
      return cb(err);
    }
    if (!user) {
      return cb(null, false);
    }
    //TODO: create helper hashing function
    // if (user.password !== password) {
    //   return cb(null, false);
    // }
    return cb(null, user);
  });
}));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.find({id: id}, function(err, user) {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});

module.exports = function (app, express) {
  var router = express.Router();

  // set up paths for router
  router.post('/users/login', passport.authenticate('local', {failureRedirect: '/'}), UserController.logIn);
  router.post('/users/signup', UserController.signUp);
  // set up paths for skatespot api
  router.get('/skatespots', SpotController.getSkateSpots);
  router.post('/skatespot', SpotController.saveSkateSpot);


  return router;
};
