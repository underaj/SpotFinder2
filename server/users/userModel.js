var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var saltRounds = 10;

var UserSchema = mongoose.Schema({
  username: String,
  password: String
});

UserSchema.pre('save', function(next) {
  var context = this;
  bcrypt.genSalt(saltRounds, function(err, salt) {
    if (err) {
      return console.error("err", err);
    }
    bcrypt.hash(context.password, salt, null, function(err, hash) {
      if (err) {
      return console.error("err", err);
      }
      context.password = hash;
      next();
    })
  });
});



var User = mongoose.model('User', UserSchema);
module.exports = User;