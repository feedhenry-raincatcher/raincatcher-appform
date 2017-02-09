
/*global angular:true*/


//The directive for rendering
angular.module('wfm.appform').directive('appformFieldDatetime', function($templateCache) {
  return {
    restrict: 'E'
    , template: $templateCache.get('wfm-template/appform-field-datetime.tpl.html')
    , controller: 'FieldDateTimeController'
    , controllerAs: 'fieldDateTimeCtrl'
  };
});