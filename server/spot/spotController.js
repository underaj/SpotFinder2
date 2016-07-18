var SkateSpot = require('./spotModel.js');

module.exports = {
	saveSkateSpot: function(req, res) {
		//will need to add the pre-save option later
		var skateSpot = req.body;
		var newSkateSpot = new SkateSpot(skateSpot);

		newSkateSpot.save(function(err, result) {
			if (err) {
				return console.error(err);
			}

			console.log('saved to db ', result);
			res.send(result);
		});
	},
	getSkateSpots: function(req, res) {
		//if no argument provided, find all
		//location argument must be an object
		// db.locationSchema.find(location, function(err, results) {
		// 	if (err) {
		// 		return console.error(err);
		// 	}
		// 	console.log(results);
		// });
		
		SkateSpot.find()
			.exec(function(err, skateSpots) {
				if (err) {
					console.log(err);
				} else {
					res.send(skateSpots);
				}
			});
	}
};
