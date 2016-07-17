var db = require('./spotModel.js');

var saveLocation = function(location) {
	//will need to add the pre-save option later
	var newLocation = new db.Location(location);

	newLocation.save(function(err, result) {
		if (err) {
			return console.error(err);
		}
		console.log('saved to db ', result);
	});
};

var findLocation = function(location) {
 //if no argument provided, find all
 //location argument must be an object
 db.locationSchema.find(location, function(err, results) {
 	if (err) {
 		return console.error(err);
 	}
 	console.log(results);
 });
};

module.exports = {
	saveLocation: saveLocation,
	findLocation: findLocation
};