
/*global angular:true*/

function FieldTextController($scope) {
  var fieldTextCtrl = this;

  fieldTextCtrl.field = $scope.field;
}

angular.module('wfm.appform').controller('FieldTextController', ['$scope', FieldTextController]);