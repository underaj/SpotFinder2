// require Users controller and Spots controller 
var SpotController = require('../spot/spotController.js');
var UserController = require('../users/userController.js');
var passport = require('passport');




module.exports = function (app, express) {
  var router = express.Router();

  // set up paths for router
  router.post('/users/signin', passport.authenticate('local', {failureRedirect: '/'}), UserController.logIn);
  router.post('/users/signup', UserController.signUp);
  router.get('/users/userDetail', UserController.getUserDetail);
  router.get('/users/logout', UserController.logOut);
  // set up paths for skatespot api
  router.get('/skatespots', SpotController.getSkateSpots);
  router.post('/skatespot', SpotController.saveSkateSpot);


  return router;
};
