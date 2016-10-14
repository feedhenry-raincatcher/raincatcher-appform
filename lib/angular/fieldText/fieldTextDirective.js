
/*global angular:true*/


//The directive for rendering
angular.module('wfm.appform').directive('appformFieldText', function($templateCache) {
  return {
    restrict: 'E'
    , template: $templateCache.get('wfm-template/appform-field-text.tpl.html')
    , controller: 'FieldTextController'
    , controllerAs: 'fieldTextCtrl'
  };
});