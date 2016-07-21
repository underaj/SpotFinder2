var User = require('./userModel.js');
var passport = require('passport');

module.exports = {
  signUp: function(req, res) {
    User.findOne({username: req.body.username}, function(err, result) {
      if (err) {
        res.sendStatus(404);
        return console.error(err);
      }
      if (result) {
        // console.log('username taken, choose another');
        res.redirect('/');
      }
      else {
        console.log('req body ', req.body);
        var newUser = new User(req.body);
        newUser.save(function(err, user) {
          if (err) {
            res.sendStatus(404);
            return console.error(err);
          }
          // console.log('saved to db ', user);
          req.login(user, function(err) {
            if (err) {
              console.error('login error ', err);
              res.sendStatus(404);
            } else {
              res.sendStatus(201);
            }
          });
          
        });
      }
    });
  },

  signIn: function(req, res) {
    res.send('passport is working');
  },

  signOut: function(req, res) {
    console.log('before ', req);
    req.logout();
    console.log('after ', req);
    res.redirect('/');
  },

  getUserDetail: function(req, res) {
    if (req.user) {
      res.send(req.user);
    } else {
      res.send({username: 'anonymous'});
    }
  }
};
