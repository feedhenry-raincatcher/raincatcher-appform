/*global angular:true*/

angular.module('wfm.appform').directive('appformFieldRadio',function($templateCache) {
  return {
    restrict: 'E',
    template: $templateCache.get('wfm-template/appform-field-radio.tpl.html'),
    controller: 'FieldRadioController',
    controllerAs: 'fieldRadioCtrl'
  };
});

