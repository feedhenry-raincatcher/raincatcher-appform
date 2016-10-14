
/*global angular:true*/


/**
 *
 * This link function monitors for the `parentFormSubmitted` event that ensures all of the fields
 * submit their values to the Submission model.
 *
 * @param scope
 * @param element
 * @param attrs
 * @param ctrl
 */
//function EnsureFieldsValuesSubmitted(scope, element, attrs, ctrl) {
//  var parentForm = element.parent();
//  while (parentForm && parentForm.prop('tagName') !== 'FORM') {
//    parentForm = parentForm.parent();
//  }
//  if (parentForm) {
//    var formController = element.find('ng-form').controller('form');
//    scope.$on('parentFormSubmitted',function() {
//      ctrl.submit(element);
//      formController.$setSubmitted();
//    });
//  }
//}

angular.module('wfm.appform').directive('appformField', function($templateCache) {
  return {
    restrict: 'E'
    , template: $templateCache.get('wfm-template/appform-field.tpl.html')
    , controller: 'FieldController'
    , controllerAs: 'fieldCtrl'
  };
});