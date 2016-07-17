var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
	console.log('db connected');
});


var locationSchema = mongoose.Schema({
	name: String,
	lat: Number,
	lng: Number,
	address: String,
	bust: String,
	description: String
});
var Location = mongoose.model('Location', locationSchema);


module.exports = {
	locationSchema: locationSchema,
	Location: Location
};