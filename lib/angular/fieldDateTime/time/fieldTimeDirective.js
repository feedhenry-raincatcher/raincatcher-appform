
/*global angular:true*/

//The directive for rendering
angular.module('wfm.appform').directive('appformFieldTime', function($templateCache) {
  return {
    restrict: 'E'
    , template: $templateCache.get('wfm-template/appform-field-time.tpl.html')
    , controller: 'FieldTimeController'
    , controllerAs: 'fieldTimeCtrl'
  };
});