var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = mongoose.Schema({
  username: String,
  password: String
});

UserSchema.pre('save', function(next) {
  var hash = bcrypt.hashSync(this.password);
  this.password = hash;
  next();
});

var User = mongoose.model('User', UserSchema);
module.exports = User;