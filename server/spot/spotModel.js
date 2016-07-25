var mongoose = require('mongoose');

var user = mongoose.Schema({
  username: String,
  password: String
});

var skateSpotSchema = mongoose.Schema({
	name: String,
	lat: Number,
	lng: Number,
	address: String,
	shortDescription: String,
	detailedDescription: String,
  bust: String,
  comments: [{username: String, comment: String}],
  checkin: [user]
});

var SkateSpot = mongoose.model('SkateSpot', skateSpotSchema);

module.exports = SkateSpot;
