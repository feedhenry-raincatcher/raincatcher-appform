/*global angular:true*/


/**
 * The directive for rendering a Textarea field Type.
 */
angular.module('wfm.appform').directive('appformFieldTextarea', function($templateCache) {
  return {
    restrict: 'E'
    , template: $templateCache.get('wfm-template/appform-field-textarea.tpl.html')
    , controller: 'FieldTextareaController'
    , controllerAs: 'fieldTextareaCtrl'
  };
});