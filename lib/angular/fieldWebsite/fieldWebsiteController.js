
/*global angular:true*/


/**
 *
 * Controller for the Website field directive
 *
 * @param $scope
 * @constructor
 */
function FieldWebsiteController($scope) {
  var fieldWebsiteCtrl = this;

  fieldWebsiteCtrl.field = $scope.field;
}

angular.module('wfm.appform').controller('FieldWebsiteController', ['$scope', FieldWebsiteController]);

module.exports = "wfm.appform.FieldWebsiteController";