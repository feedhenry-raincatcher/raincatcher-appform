
/* globals inject */

var angular = require('angular');
var should = require('should');
require('angular-mocks');
var initModule = require('../../../test/initModule');

describe('Email Field Controller', function() {

  //Setting up a mock module to test.
  before(function() {
    initModule();

    //The email controller is the controller under test.
    require('./fieldEmailController');
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
      "_id": "emailfieldid",
      "name": "Email Field"
    };

    var controller = this.$controller('FieldEmailController', { $scope: $scope});

    //The field from the parent scope should be bound to the controller scope.
    should(controller.field).equal($scope.field);
  }));
});