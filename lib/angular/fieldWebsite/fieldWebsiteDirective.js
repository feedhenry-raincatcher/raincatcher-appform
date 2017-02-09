
/*global angular:true*/


/**
 * The directive for rendering a Website field Type.
 */
angular.module('wfm.appform').directive('appformFieldWebsite', function($templateCache) {
  return {
    restrict: 'E'
    , template: $templateCache.get('wfm-template/appform-field-website.tpl.html')
    , controller: 'FieldWebsiteController'
    , controllerAs: 'fieldWebsiteCtrl'
  };
});