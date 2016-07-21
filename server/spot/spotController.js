var SkateSpot = require('./spotModel.js');

module.exports = {
	saveSkateSpot: function(req, res) {
		//will need to add the pre-save option later
		//TODO check if user is authorized via req.user
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
		SkateSpot.find()
			.exec(function(err, skateSpots) {
				if (err) {
					console.log(err);
				} else {
					res.send(skateSpots);
				}
			});
	},
	checkIn: function(req,res) {
		console.log(req.body);
		console.log(req.user);
		SkateSpot.findOne({'_id': req.body.locationId}, function(err, skatespot) {
			skatespot.update( { "$addToSet": { checkin: req.user }}, function(err, list) {
				console.log(list);
				res.send();
			});
		});
	}
};
