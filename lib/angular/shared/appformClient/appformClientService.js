'use strict';
/*global angular:true*/

//Registering the client service with the angular module.
angular.module('wfm.appform').service('appformClient', ['FeedhenryClientService', AppformClientService]);

/**
 *
 * Appforms client service to interact with the $fh.forms Client SDK
 *
 * @returns {{}}
 * @constructor
 */
function AppformClientService($fh) {
  return require('./appformClient')($fh);
}

module.exports = 'wfm.appform.appformClient';
