/* globals inject */

var angular = require('angular');
var should = require('should');
var sinon = require('sinon');
require('angular-mocks');
var initModule = require('../../../test/initModule');

describe("Time Field Directive", function() {

  before(function() {
    initModule();

    //The number directive is the directive under test.
    require('./fieldTimeController');
    require('./fieldTimeDirective');

    //Requiring all of the templates to be able to render the html
    //TODO: Look into a better way of organising templates.
    require('../../../dist');
  });

  beforeEach(angular.mock.module('wfm.appform'));

  beforeEach(function() {
    var self = this;

    inject(function($rootScope, $compile) {
      self.scope = $rootScope.$new();

      self.element = "<appform-field-time></appform-field-time>";

      //The function that is executed whenever a value changes.
      self.updateValueSpy = sinon.spy();

      //Setting A dummy field on the controller scope.
      self.scope.field = {
        _id: "timefieldid",
        name: "Time Field",
        updateValue: self.updateValueSpy
      };

      self.element = $compile(self.element)(self.scope);
      self.scope.$digest();

      self.element.data('$appformFieldTimeController', {});
      self.fieldTimeCtrl = self.element.scope().fieldTimeCtrl;
    });
  });

  it("There should only be one input element", function() {
    should(this.element.find('input').length).equal(1);
  });

  it("It should be a number eleemnt", function() {
    should(this.element.find('input').attr('type')).equal('time');
  });

  it("The model should be set to fieldTimeCtrl.field.value", function() {
    should(this.element.find('input').attr('ng-model')).equal('fieldTimeCtrl.field.value');
  });

  it("Setting a value on the scope should apply that value to the input", function() {
    var self = this;
    self.fieldTimeCtrl.field.value = new Date('2016-01-01 12:34 GMT-0000');
    self.scope.$apply();

    should(parseInt(self.element.find('input').val())).equal('12:34.00.00');
  });

});