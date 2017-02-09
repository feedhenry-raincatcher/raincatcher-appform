/* globals inject */

var angular = require('angular');
var should = require('should');
var sinon = require('sinon');
require('angular-mocks');
var initModule = require('../../../test/initModule');

describe("Textarea Field Directive", function() {

  before(function() {
    initModule();

    // The textarea directive is the directive under test.
    require('./fieldTextareaController');
    require('./fieldTextareaDirective');

    // Requiring all of the templates to be able to render the html
    // TODO: Look into a better way of organising templates.
    require('../../../dist');
  });

  beforeEach(angular.mock.module('wfm.appform'));

  beforeEach(function() {
    var self = this;

    inject(function($rootScope, $compile) {
      self.scope = $rootScope.$new();

      self.element = "<appform-field-textarea></appform-field-textarea>";

      // The function that is executed whenever a value changes.
      self.updateValueSpy = sinon.spy();

      // Setting A dummy field on the controller scope.
      self.scope.field = {
        _id: "textareafieldid",
        name: "Textarea Field",
        updateValue: self.updateValueSpy
      };

      self.element = $compile(self.element)(self.scope);
      self.scope.$digest();

      self.element.data('$appformFieldTextareaController', {});
      self.fieldTextareaCtrl = self.element.scope().fieldTextareaCtrl;
    });
  });

  it("There should only be one textarea element", function() {
    should(this.element.find('textarea').length).equal(1);
  });

  it("There should only be no input element", function() {
    should(this.element.find('input').length).equal(0);
  });

  it("The model should be set to fieldTextareaCtrl.field.value", function() {
    should(this.element.find('textarea').attr('ng-model')).equal('fieldTextareaCtrl.field.value');
  });

  it("Setting a value on the scope should give set a default value", function() {
    var self = this;
    self.fieldTextareaCtrl.field.value = 'foo';
    self.scope.$apply();

    should(self.element.find('textarea').val()).equal('foo');
  });

});