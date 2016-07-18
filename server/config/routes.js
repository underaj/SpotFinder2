// require Users controller and Spots controller
var SpotController = require('../spot/spotController.js');

module.exports = function (app, express) {
  var router = express.Router();

  // set up paths for router
  // router.get('/user', UserController.getUsers);

  // set up paths for skatespot api
  router.get('/skatespots', SpotController.getSkateSpots);
  router.post('/skatespots', SpotController.saveSkateSpot);

  return router;
};
