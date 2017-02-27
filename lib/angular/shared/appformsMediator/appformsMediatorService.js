'use strict';
/*global angular:true*/


//Registering the client service with the angular module.
angular.module('wfm.appform').service('AppformsMediatorService', ['wfm.core.mediator', 'appformClient', AppformsMediatorService]);

/**
 *
 * Appforms mediator service to interact with the appforms mediator events that are fired.
 *
 * @returns {{}}
 * @constructor
 */
function AppformsMediatorService(mediator, appformClient) {
  return require('./appformsMediator')(mediator, appformClient);
}

module.exports = 'wfm.appform.AppformsMediatorService';
