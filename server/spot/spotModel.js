var mongoose = require('mongoose');

var user = mongoose.Schema({
  username: String,
  password: String
});

var skateSpotSchema = mongoose.Schema({
	name: String,
  icon: String,
	lat: Number,
	lng: Number,
	address: String,
	shortDescription: String,
	detailedDescription: String,
  bust: String,
  checkin: [user]
});

var SkateSpot = mongoose.model('SkateSpot', skateSpotSchema);

module.exports = SkateSpot;
