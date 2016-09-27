
/*global angular:true*/

angular.module('wfm.appform').directive('appformSection', function($templateCache) {
  return {
    restrict: 'E'
    , template: $templateCache.get('wfm-template/appform-section.tpl.html')
    , controller: 'SectionController'
    //Note, we use ctrl as the name of the controller. This is represented in the view when accessing variables.
    , controllerAs: 'sectionCtrl'
  };
});