var SkateSpot = require('./spotModel.js');

module.exports = {
	saveSkateSpot: function(req, res) {
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
		SkateSpot.findOne({'_id': req.body.locationId}, function(err, skatespot) {
			skatespot.update( { "$addToSet": { checkin: req.user }}, function(err, list) {
				res.send();
			});
		});
	},

  addComment: function(req, res) {
  	SkateSpot.findOne({'_id': req.body.locationId}, function(err, skatespot) {
  		if (err) {
  			console.error(err);
  			res.send(404);
  		} else {
  			skatespot.update({ "$addToSet": {comments: {username: req.body.username, comment: req.body.newComment} } }, function(err, result) {
  				if (err) {
  					console.error(err);
  					res.sendStatus(404);
  				} else {

            res.sendStatus(201);  					
	  			}
  			});
  		}
  	});
  }

};
