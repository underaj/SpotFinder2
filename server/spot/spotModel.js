var mongoose = require('mongoose');

var skateSpotSchema = mongoose.Schema({
	name: String,
  icon: String,
	lat: Number,
	lng: Number,
	address: String,
	shortDescription: String,
	detailedDescription: String,
  bust: String
});
var SkateSpot = mongoose.model('SkateSpot', skateSpotSchema);

module.exports = SkateSpot;
