const $ = require('jquery');

export const apiGet = function apiGet(path, callback) {
  var jqXHR = $.get(path);
  jqXHR.done( (data) => callback(data) );
};

export const apiPost = function apiPost(path, postObj) {
  return $.ajax({
    method: 'POST',
    url: path,
    data: JSON.stringify(postObj),
    contentType: 'application/json'
  });
};

export const getGeo = function getGeo(cb) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(cb);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
};

const toRad = (diff) => {
  return diff * Math.PI() / 180;
};

export const haversineDistance = (storedSpot, userLoc) => {
  var R = 6371; // Earth Radius in km
  var latDiff = userLoc.lat - storedSpot.lat;
  var dLat = toRad(latDiff);
  var lngDiff = userLoc.lng - storedSpot.lng;
  var dLng = toRad(lngDiff);

  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(storedSpot.lat)) * 
          Math.cos(toRad(userLoc.lat)) * Math.sin(dLng / 2 ) * Math.sin(dLng / 2 );

  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 -a));

  var distanceInKm = R * c;

  return distanceInKm;
};