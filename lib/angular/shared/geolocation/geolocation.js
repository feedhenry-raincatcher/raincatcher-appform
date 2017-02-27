'use strict';

/*global navigator:true*/

/**
 *
 * Returns the geolocation from Cordova if available.
 * @param cb - The callback
 * @returns {Object}
 */
function getGeolocation(cb) {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Got Position :", position);
    return cb(null, position);
  }, function(err) {
    console.log(err.message ? err.message : err);
    return cb(err, null);
  });
}

module.exports = {
  getGeolocation : getGeolocation
};
