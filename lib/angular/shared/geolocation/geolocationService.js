'use strict';
/*global angular:true*/

//Registering the client service with the angular module.
angular.module('wfm.appform').service('GeolocationService', [GeolocationService]);

/**
 *
 * Returns the geolocation.
 * @returns {Object}
 */
function GeolocationService() {
  return require('./geolocation');
}

module.exports = 'wfm.appform.GeolocationService';
