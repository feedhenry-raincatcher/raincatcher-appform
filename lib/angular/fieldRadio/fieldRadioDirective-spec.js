/*globals inject*/
var initModule = require('../../../test/initModule');

var angular = require('angular');
require('angular-mocks');

var should = require('should');

describe('Radio Field Directive', function() {

  var self = {};
  var element = '<appform-field-radio></appform-field-radio>';

  function setUp() {
    initModule();
    require('./fieldRadioController');
    require('./fieldRadioDirective');
  }

  before(setUp);

  describe('#Parent scope does not contain any options', function() {

    function initDirectiveWithoutOptions() {
      angular.mock.module('wfm.appform');
      inject(function($rootScope, $compile) {
        self.scope = $rootScope.$new();
        self.scope.field = {
          fieldOptions: {
            definition: {
              options: []
            }
          }
        };
        self.element = $compile(element)(self.scope);
        self.scope.$digest();
        self.fieldRadioController = self.element.scope().fieldRadioCtrl;
      });
    }

    beforeEach(initDirectiveWithoutOptions);

    it('Should contain one md-radio-group element', function() {
      should(self.element.find('md-radio-group').length).equal(1);
    });

    it('Should contain none radio options',function() {
      should(self.element.find('md-radio-button').length).equal(0);
    });
  });

  describe('#Parent scope does contain options',function() {

    function initDirectiveWithOptions() {
      angular.mock.module('wfm.appform');
      inject(function($rootScope, $compile) {
        self.scope = $rootScope.$new();
        self.scope.field = {
          fieldOptions: {
            definition: {
              options: [{
                label: 'Radio Option 1',
                checked: true
              },{
                label: 'Radio Option 2',
                checked: true
              },{
                label: 'Option 3',
                checked: false
              }]
            }
          }
        };
        self.element = $compile(element)(self.scope);
        self.scope.$digest();
        self.fieldRadioController = self.element.scope().fieldRadioCtrl;
      });
    }

    beforeEach(initDirectiveWithOptions);

    it('Should contain only first checked option',function() {
      should(self.fieldRadioController.field.value).equal('Radio Option 1');
    });

    it("Model should be set to fieldWebsiteCtrl.field.value", function() {
      should(self.element.find('md-radio-group').attr('ng-model')).equal('fieldRadioCtrl.field.value');
    });

  });
});