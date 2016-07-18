var mongoose = require('mongoose');

var skateSpotSchema = mongoose.Schema({
	name: String,
	lat: Number,
	lng: Number,
	address: String,
	bust: String,
	description: String
});
var SkateSpot = mongoose.model('SkateSpot', skateSpotSchema);

module.exports = SkateSpot;
