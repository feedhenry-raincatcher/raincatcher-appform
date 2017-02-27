/* globals inject */

var angular = require('angular');
var should = require('should');
var sinon = require('sinon');
require('angular-mocks');
var initModule = require('../../../test/initModule');

describe("Email Field Directive", function() {

  before(function() {
    initModule();

    //The email directive is the directive under test.
    require('./fieldEmailController');
    require('./fieldEmailDirective');

    //Requiring all of the templates to be able to render the html
    //TODO: Look into a better way of organising templates.
    require('../../../dist');
  });

  beforeEach(angular.mock.module('wfm.appform'));

  beforeEach(function() {
    var self = this;

    inject(function($rootScope, $compile) {
      self.scope = $rootScope.$new();

      self.element = "<appform-field-email></appform-field-email>";

      //The function that is executed whenever a value changes.
      self.updateValueSpy = sinon.spy();

      //Setting A dummy field on the controller scope.
      self.scope.field = {
        _id: "emailfieldid",
        name: "Email Field",
        updateValue: self.updateValueSpy
      };

      self.element = $compile(self.element)(self.scope);
      self.scope.$digest();

      self.element.data('$appformFieldEmailController', {});
      self.fieldEmailCtrl = self.element.scope().fieldEmailCtrl;
    });
  });

  it("There should only be one input element", function() {
    should(this.element.find('input').length).equal(1);
  });

  it("It should be an email element", function() {
    should(this.element.find('input').attr('type')).equal('email');
  });

  it("The model should be set to fieldEmailCtrl.field.value", function() {
    should(this.element.find('input').attr('ng-model')).equal('fieldEmailCtrl.field.value');
  });

  it("Setting a value on the scope should give set a default value", function() {
    var self = this;
    self.fieldEmailCtrl.field.value = 'test@test.com';
    self.scope.$apply();

    should(self.element.find('input').val()).equal('test@test.com');
  });

});