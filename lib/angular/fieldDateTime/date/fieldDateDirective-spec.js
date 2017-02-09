/* globals inject */

var angular = require('angular');
var should = require('should');
var sinon = require('sinon');
var moment = require('moment');
require('angular-mocks');
var initModule = require('../../../../test/initModule');

describe("Date Field Directive", function() {

  before(function() {
    initModule();

    //The number directive is the directive under test.
    require('./fieldDateController');
    require('./fieldDateDirective');

    //Requiring all of the templates to be able to render the html
    //TODO: Look into a better way of organising templates.
    require('../../../../dist');
  });

  beforeEach(angular.mock.module('wfm.appform'));

  beforeEach(function() {
    var self = this;

    inject(function($rootScope, $compile) {
      self.scope = $rootScope.$new();

      self.element = "<appform-field-date></appform-field-date>";

      //The function that is executed whenever a value changes.
      self.updateValueSpy = sinon.spy();

      //Setting A dummy field on the controller scope.
      self.scope.field = {
        _id: "datefieldid",
        name: "Date Field",
        updateValue: self.updateValueSpy
      };

      self.element = $compile(self.element)(self.scope);
      self.scope.$digest();

      self.element.data('$appformFieldDateController', {});
      self.fieldDateCtrl = self.element.scope().fieldDateCtrl;
    });
  });

  it("There should only be one input element", function() {
    should(this.element.find('input').length).equal(1);
  });

  it("It should be a date input field", function() {
    should(this.element.find('input').attr('type')).equal('date');
  });

  it("The model should be set to fieldDateCtrl.field.value", function() {
    should(this.element.find('input').attr('ng-model')).equal('fieldDateCtrl.field.value');
  });

  it("Should apply a value set on the scope to the input", function() {
    var testValue = moment('2016-01-01T12:34:00.000Z');
    this.fieldDateCtrl.field.value = testValue.toDate();
    this.scope.$apply();

    should(this.element.find('input').val()).equal(testValue.format('YYYY-MM-DD'));
  });

});