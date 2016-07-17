var server = require('../server.js');

module.exports = function (server) {
	server.get('/', function(req, res) {
		res.send('ok');
	});
};