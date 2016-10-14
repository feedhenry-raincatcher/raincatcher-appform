
/*global angular:true*/

function FieldNumberController($scope) {
  var fieldNumberCtrl = this;

  fieldNumberCtrl.field = $scope.field;
}

angular.module('wfm.appform').controller('FieldNumberController', ['$scope', FieldNumberController]);