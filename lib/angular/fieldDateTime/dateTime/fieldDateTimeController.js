
/*global angular:true*/
var moment = require('moment');

function FieldDateTimeController($scope) {
  var fieldDateTimeCtrl = this;
  fieldDateTimeCtrl.field = $scope.field;
  fieldDateTimeCtrl.field.value = fieldDateTimeCtrl.field.value || {};

  fieldDateTimeCtrl.updateModel = function() {
    var date = moment(fieldDateTimeCtrl.field.date);
    var time = moment(fieldDateTimeCtrl.field.time);
    var dateTime = date.clone().set({
      hour: time.hours(),
      minute: time.minutes(),
      second: time.seconds()
    });
    fieldDateTimeCtrl.field.value = dateTime.toDate();
  };
}

angular.module('wfm.appform').controller('FieldDateTimeController', ['$scope', FieldDateTimeController]);

module.exports = "wfm.appform.FieldDateTimeController";
