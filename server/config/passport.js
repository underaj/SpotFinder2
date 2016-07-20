var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../users/userModel.js');
var bcrypt = require('bcrypt-nodejs');


passport.use(new LocalStrategy(function(username, password, cb) {
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
  cb(null, user._id);
});

passport.deserializeUser(function(id, cb) {
<<<<<<< 8528b533d1d4071eda436e63d446bd7bcca0db19
  User.findOne({'_id': id}, function(err, user) {
||||||| merged common ancestors
  User.find({id: id}, function(err, user) {
=======
  User.findOne({ _id: id}, function(err, user) {
>>>>>>> refactor func names in UserCtrl for consistency
    if (err) {
      return cb(err);
    }

    cb(null, user);
  });
});
