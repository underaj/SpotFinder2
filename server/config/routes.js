// require Users controller and Spots controller
var spotController = require('../spot/spotController.js');

module.exports = function (app, express) {
  var router = express.Router();

  // set up paths for router
  // router.get('/user', UserController.getUsers);

  return router;
};
