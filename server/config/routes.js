// require Users controller and Spots controller 
var SpotController = require('../spot/spotController.js');
var UserController = require('../users/userController.js');
var passport = require('passport');




module.exports = function (app, express) {
  var router = express.Router();

  // set up paths for router
  router.post('/users/signin', passport.authenticate('local', {failureRedirect: '/'}), UserController.signIn);
  router.post('/users/signup', UserController.signUp);
  router.get('/users/userDetail', UserController.getUserDetail);
  router.get('/users/logout', UserController.signOut);
  // set up paths for skatespot api
  router.get('/skatespots', SpotController.getSkateSpots);
  router.post('/skatespots', isLoggedIn, SpotController.saveSkateSpot);
  router.post('/skatespot/checkin', SpotController.checkIn);
  router.post('/skatespot/comment', SpotController.addComment);


  return router;
};

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
