// require Users controller and Spots controller 
var SpotController = require('../spot/spotController.js');
var UserController = require('../users/userController.js');
var passport = require('passport');




module.exports = function (app, express) {
  var router = express.Router();

  // set up paths for router
<<<<<<< 8528b533d1d4071eda436e63d446bd7bcca0db19
  router.post('/users/signin', passport.authenticate('local', {failureRedirect: '/'}), UserController.logIn);
||||||| merged common ancestors
  router.post('/users/login', passport.authenticate('local', {failureRedirect: '/'}), UserController.logIn);
=======
  router.post('/users/signin', passport.authenticate('local', {failureRedirect: '/'}), UserController.signIn);
>>>>>>> refactor func names in UserCtrl for consistency
  router.post('/users/signup', UserController.signUp);
<<<<<<< 8528b533d1d4071eda436e63d446bd7bcca0db19
  router.get('/users/userDetail', UserController.getUserDetail);
  router.get('/users/logout', UserController.logOut);
||||||| merged common ancestors
  router.get('/users/logout', UserController.logOut);
=======
  router.get('/users/logout', UserController.signOut);
>>>>>>> refactor func names in UserCtrl for consistency
  // set up paths for skatespot api
  router.get('/skatespots', SpotController.getSkateSpots);
  router.post('/skatespot', SpotController.saveSkateSpot);


  return router;
};
