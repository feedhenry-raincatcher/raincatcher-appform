/*global angular:true*/


/**
 *
 * Controller for the Textarea field directive
 *
 * @param $scope
 * @constructor
 */
function FieldTextareaController($scope) {
  var fieldTextareaCtrl = this;

  fieldTextareaCtrl.field = $scope.field;
}

angular.module('wfm.appform').controller('FieldTextareaController', ['$scope', FieldTextareaController]);

module.exports = "wfm.appform.FieldTextareaController";