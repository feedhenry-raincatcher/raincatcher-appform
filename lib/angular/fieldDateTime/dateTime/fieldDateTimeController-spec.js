
/* globals inject */

var angular = require('angular');
var moment = require('moment');
var should = require('should');
require('angular-mocks');
var initModule = require('../../../../test/initModule');

describe('DateTime Field Controller', function() {

  //Setting up a mock module to test.
  before(function() {
    initModule();

    //The number controller is the controller under test.
    require('./fieldDateTimeController');
  });

  beforeEach(angular.mock.module('wfm.appform'));

  beforeEach(inject(function(_$controller_) {
    this.$controller = _$controller_;
  }));

  it("Should set the correct date", inject(function($rootScope) {
    //Setting up a new mock $scope.
    var $scope = $rootScope.$new();

    var stringValue = '2016-07-13T12:34:56.789Z';
    var dateTimeValue = moment(stringValue);

    // <input type="time"/> uses epoch date as date value
    var timeValue = dateTimeValue.clone()
      .year(1970)
      .month(1)
      .day(1);

    // <input type="date"/> uses midnight time
    var dateValue = dateTimeValue.clone()
      .hour(0)
      .minute(0)
      .second(0);

    //Setting a mock field
    $scope.field = {
      "_id": "dateField",
      "name": "DateTime Field",
      "date": dateValue.toDate(),
      "time": timeValue.toDate()
    };

    var controller = this.$controller('FieldDateTimeController', { $scope: $scope });
    controller.updateModel();
    should(controller.field.value.getTime()).equal(dateTimeValue.toDate().getTime());

    //The field from the parent scope should be bound to the controller scope.
    should(controller.field).equal($scope.field);
  }));
});