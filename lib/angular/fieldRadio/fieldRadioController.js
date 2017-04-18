/*global angular:true*/

function FieldRadioController($scope) {
  var self = this;
  self.field = $scope.field;
  self.field.value = (function() {
    var options = self.field.fieldOptions.definition.options;
    for (var i = 0; i < options.length; ++i) {
      if (options[i].checked) {
        return options[i].label;
      }
    }
  })();
}

FieldRadioController.$inject = ['$scope'];

angular.module('wfm.appform').controller('FieldRadioController', FieldRadioController);

module.exports = 'wfm.appform.FieldRadioController';