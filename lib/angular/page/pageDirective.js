
/*global angular:true*/

angular.module('wfm.appform').directive('appformPage', function($templateCache) {
  return {
    restrict: 'E'
    , template: $templateCache.get('wfm-template/appform-page.tpl.html')
    , controller: 'PageController'
    //Note, we use ctrl as the name of the controller. This is represented in the view when accessing variables.
    , controllerAs: 'pageCtrl'
  };
});