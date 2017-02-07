
/*global angular:true*/


/**
 *
 * Controller for the Dropdown field directive
 *
 * @param $scope
 * @constructor
 */
function FieldDropdownController($scope) {
  var fieldDropdownCtrl = this;

  fieldDropdownCtrl.field = $scope.field;
}

angular.module('wfm.appform').controller('FieldDropdownController', ['$scope', FieldDropdownController]);

module.exports = "wfm.appform.FieldDropdownController";