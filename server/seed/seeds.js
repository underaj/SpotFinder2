var SkateSpot = require('../spot/spotModel.js');

module.exports = function() {
  var dummyData = [
    {
      name: 'DOOP DOOP',
      lat:37.77397,
      lng: -122.43129,
      address: '1st street',
      shortDescription: 'this spot is rad',
      detailedDescription: 'BLA BLA BLA SOOOO GOOOOOOD',
      bust: 'hello hello',
      comments: [{username: "theClown", comment: 'wacka wacka'}, {username: "theClown", comment: 'wacka wacka'}]
    },
    { 
      name: 'WOOP WOOP',
      lat:37.75397,
      lng: -122.43129,
      address: '2nd street',
      shortDescription: 'this spot is rad',
      detailedDescription: 'BLA BLA BLA SOOOO GOOOOOOD',
      bust: 'hello hello',
      comments: [{username: "theClown", comment: 'wacka wacka'}, {username: "theClown", comment: 'wacka wacka'}]
    },
    {
      name: 'CHOOP CHOOP',
      lat: 37.71397,
      lng: -122.45129,
      address: '3rd street',
      shortDescription: 'this spot is rad',
      detailedDescription: 'BLA BLA BLA SOOOO GOOOOOOD',
      bust: 'hello hello',
      comments: [{username: "theClown", comment: 'wacka wacka'}, {username: "theClown", comment: 'wacka wacka'}]
    }
  ];

  SkateSpot.find().exec(function(err, skateSpots) {
    if (err) {
      console.log(err);
    } else if (skateSpots.length === 0) {
      SkateSpot.create(dummyData[0]);
      SkateSpot.create(dummyData[1]);
      SkateSpot.create(dummyData[2]);
    }
  });
};

