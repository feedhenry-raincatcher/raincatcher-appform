
/*global angular:true*/


/**
 * Directive for rendering a Date field
 */
angular.module('wfm.appform').directive('appformFieldDate', function($templateCache) {
  return {
    restrict: 'E'
    , template: $templateCache.get('wfm-template/appform-field-date.tpl.html')
    , controller: 'FieldDateController'
    , controllerAs: 'fieldDateCtrl'
  };
});