
/* globals inject */

var angular = require('angular');
var should = require('should');
require('angular-mocks');
var initModule = require('../../../test/initModule');

describe('Website Field Controller', function() {

  //Setting up a mock module to test.
  before(function() {
    initModule();

    //The website controller is the controller under test.
    require('./fieldWebsiteController');
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
      "_id": "websitefieldid",
      "name": "Website Field"
    };

    var controller = this.$controller('FieldWebsiteController', { $scope: $scope});

    //The field from the parent scope should be bound to the controller scope.
    should(controller.field).equal($scope.field);
  }));
});