/*globals inject*/

var initModule = require('../../../test/initModule');
var angular = require('angular');
require('angular-mocks');

var should = require('should');

describe('Radio Field Controller', function() {
  function setUp() {
    initModule();
    require('./fieldRadioController');
  }

  var $controller;
  var $scope = {};
  var radioController = {};

  function initController() {
    angular.mock.module('wfm.appform');
    inject(function(_$controller_) {
      $controller = _$controller_;
    });
    inject(function($rootScope) {
      $scope = $rootScope.$new();
    });
  }

  before(setUp);
  beforeEach(initController);

  it('Should bind scope to controller correctly', function() {
    $scope.field = {
      fieldOptions: {
        definition: {
          options: [
            {
              label: 'Radio Button 1',
              checked: false
            }, {
              label: 'Option 2',
              checked: false
            }
          ]
        }
      }
    };
    radioController = $controller('FieldRadioController',{$scope: $scope});
    should(radioController.field).eql($scope.field);
  });

});
