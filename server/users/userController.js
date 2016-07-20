var User = require('./userModel.js');

module.exports = {
  signUp: function(req, res) {
    User.findOne({username: req.body.username}, function(err, result) {
      if (err) {
        res.sendStatus(404);
        return console.error(err);
      }
      if (result) {
        // console.log('username taken, choose another');
        res.sendStatus(404);
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
          res.sendStatus(201);
        });
      }
    });
  },
  logIn: function(req, res) {
      res.send('passport is working');
  }
};