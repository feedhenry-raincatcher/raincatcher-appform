
/*global angular:true*/


/**
 * The directive for rendering a Email field Type.
 */
angular.module('wfm.appform').directive('appformFieldEmail', function($templateCache) {
  return {
    restrict: 'E'
    , template: $templateCache.get('wfm-template/appform-field-email.tpl.html')
    , controller: 'FieldEmailController'
    , controllerAs: 'fieldEmailCtrl'
  };
});