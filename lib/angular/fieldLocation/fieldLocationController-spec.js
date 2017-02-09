
/* globals inject */

var angular = require('angular');
var should = require('should');
require('angular-mocks');
var initModule = require('../../../test/initModule');

describe('Location Field Controller', function() {

  //Setting up a mock module to test.
  before(function() {
    initModule();

    //The location controller is the controller under test.
    require('./fieldLocationController');
    // Import the geolocation service
    require('../shared/geolocation/geolocationService');

  });

  beforeEach(angular.mock.module('wfm.appform'));

  beforeEach(inject(function(_$controller_) {
    this.$controller = _$controller_;
  }));

  it("The field should be set from the parent scope", inject(function($rootScope) {
    //Setting up a new mock $scope.
    var $scope = $rootScope.$new();

    //Setting a mock field
    $scope.field = {
      "_id": "locationfieldid",
      "name": "Location Field",
      "values": {}
    };

    var controller = this.$controller('FieldLocationController', { $scope: $scope});

    //The field from the parent scope should be bound to the controller scope.
    should(controller.field).equal($scope.field);
  }));
});
