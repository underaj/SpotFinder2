// require Users controller and Spots controller 
var SpotController = require('../spot/spotController.js');
var UserController = require('../users/userController.js');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var User = require('../users/userModel.js');
var bcrypt = require('bcrypt-nodejs');

passport.use(new Strategy(function(username, password, cb) {
  User.findOne({username: username}, function(err, user) {
    if (err) {
      return cb(err);
    }
    if (!user) {
      return cb(null, false);
    }
    bcrypt.compare(password, user.password, function(err, res) {
      if (err) {
        console.error('err in compare password', err);
        return console.error('err in compare password', err);
      }
      if (res === true) {
        return cb(null, user);
      }
        return cb(null, false);
    });
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
  router.post('/login', passport.authenticate('local', {failureRedirect: '/'}), UserController.logIn);
  router.post('/user', UserController.signUp);
  router.get('/logout', UserController.logOut);
  // set up paths for skatespot api
  router.get('/skatespots', SpotController.getSkateSpots);
  router.post('/skatespot', SpotController.saveSkateSpot);


  return router;
};
