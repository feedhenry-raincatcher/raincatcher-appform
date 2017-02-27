
/* globals inject */

var angular = require('angular');
var moment = require('moment');
var should = require('should');
require('angular-mocks');
var initModule = require('../../../../test/initModule');

describe('Date Field Controller', function() {

  //Setting up a mock module to test.
  before(function() {
    initModule();

    //The number controller is the controller under test.
    require('./fieldDateController');
  });

  beforeEach(angular.mock.module('wfm.appform'));

  beforeEach(inject(function(_$controller_) {
    this.$controller = _$controller_;
  }));

  it("Should set the correct date", inject(function($rootScope) {
    //Setting up a new mock $scope.
    var $scope = $rootScope.$new();

    var stringValue = '2016-01-01T13:00:00.000Z';
    var dateValue = moment(stringValue);

    //Setting a mock field
    $scope.field = {
      "_id": "dateField",
      "name": "Date Field",
      "value": dateValue
    };

    var controller = this.$controller('FieldDateController', { $scope: $scope });
    controller.updateModel();
    should(controller.field.value.getTime()).equal(dateValue.toDate().getTime());

    //The field from the parent scope should be bound to the controller scope.
    should(controller.field).equal($scope.field);
  }));
});