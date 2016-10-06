
/* globals inject */

var angular = require('angular');
var should = require('should');
require('angular-mocks');
var initModule = require('../../../../test/initModule');

describe('Number Field Controller', function() {

  //Setting up a mock module to test.
  before(function() {
    initModule();

    //The number controller is the controller under test.
    require('./fieldTimeController');
  });

  beforeEach(angular.mock.module('wfm.appform'));

  beforeEach(inject(function(_$controller_) {
    this.$controller = _$controller_;
  }));

  it("Should set the correct time", inject(function($rootScope) {
    //Setting up a new mock $scope.
    var $scope = $rootScope.$new();

    var stringValue = '2016-10-06 13:00:00 GMT-0000';
    var dateValue = new Date(stringValue);

    //Setting a mock field
    $scope.field = {
      "_id": "timeField",
      "name": "Time Field",
      "value": stringValue
    };

    var controller = this.$controller('FieldTimeController', { $scope: $scope });
    controller.updateModel();
    should(controller.field.value).equal(dateValue);

    //The field from the parent scope should be bound to the controller scope.
    should(controller.field).equal($scope.field);
  }));
});