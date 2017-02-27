/* globals inject */

var angular = require('angular');
var should = require('should');
var sinon = require('sinon');
var moment = require('moment');
require('angular-mocks');
var initModule = require('../../../../test/initModule');

describe("DateTime Field Directive", function() {

  before(function() {
    initModule();

    //The number directive is the directive under test.
    require('./fieldDateTimeController');
    require('./fieldDateTimeDirective');

    //Requiring all of the templates to be able to render the html
    //TODO: Look into a better way of organising templates.
    require('../../../../dist');
  });

  beforeEach(angular.mock.module('wfm.appform'));

  beforeEach(function() {
    var self = this;

    inject(function($rootScope, $compile) {
      self.scope = $rootScope.$new();

      self.element = "<appform-field-datetime></appform-field-datetime>";

      //The function that is executed whenever a value changes.
      self.updateValueSpy = sinon.spy();

      //Setting A dummy field on the controller scope.
      self.scope.field = {
        _id: "datefieldid",
        name: "DateTime Field",
        updateValue: self.updateValueSpy
      };

      self.element = $compile(self.element)(self.scope);
      self.scope.$digest();

      self.element.data('$appformFieldDateTimeController', {});
      self.fieldDateTimeCtrl = self.element.scope().fieldDateTimeCtrl;
    });
  });

  it("There should be two input elements", function() {
    should(this.element.find('input').length).equal(2);
  });

  it("Should apply a value set on the scope to the input", function() {
    var testValue = moment('2016-01-01T12:34:00.000Z');
    this.fieldDateTimeCtrl.field.date = testValue.toDate(),
    this.fieldDateTimeCtrl.field.time = testValue.toDate(),

    this.scope.$apply();

    should(this.element.find('input')[0].value)
      .equal(testValue.format('YYYY-MM-DD'));
    should(this.element.find('input')[1].value)
      .equal(testValue.format('HH:mm:ss.SSS'));
  });

});