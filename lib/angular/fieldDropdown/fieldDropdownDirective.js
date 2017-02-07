
/*global angular:true*/


/**
 * The directive for rendering a Dropdown field Type.
 */
angular.module('wfm.appform').directive('appformFieldDropdown', function($templateCache) {
  return {
    restrict: 'E'
    , template: $templateCache.get('wfm-template/appform-field-dropdown.tpl.html')
    , controller: 'FieldDropdownController'
    , controllerAs: 'fieldDropdownCtrl'
  };
});