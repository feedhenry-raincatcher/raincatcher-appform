
/*global angular:true*/


/**
 *
 * Controller for the Email field directive
 *
 * @param $scope
 * @constructor
 */
function FieldEmailController($scope) {
  var fieldEmailCtrl = this;

  fieldEmailCtrl.field = $scope.field;
}

angular.module('wfm.appform').controller('FieldEmailController', ['$scope', FieldEmailController]);

module.exports = "wfm.appform.FieldEmailController";