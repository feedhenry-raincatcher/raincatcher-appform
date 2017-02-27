
/*global angular:true*/

var moment = require('moment');
function FieldDateController($scope) {
  var fieldDateCtrl = this;

  fieldDateCtrl.field = $scope.field;

  fieldDateCtrl.updateModel = function() {
    fieldDateCtrl.field.value = moment(fieldDateCtrl.field.value).toDate();
  };
}

angular.module('wfm.appform').controller('FieldDateController', ['$scope', FieldDateController]);

module.exports = "wfm.appform.FieldDateController";