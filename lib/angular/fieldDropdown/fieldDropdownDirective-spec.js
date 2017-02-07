/* globals inject */

var angular = require('angular');
var should = require('should');
var sinon = require('sinon');
require('angular-mocks');
var initModule = require('../../../test/initModule');

describe("Dropdown Field Directive", function() {

  before(function() {
    initModule();

    //The dropdown directive is the directive under test.
    require('./fieldDropdownController');
    require('./fieldDropdownDirective');

    //Requiring all of the templates to be able to render the html
    //TODO: Look into a better way of organising templates.
    require('../../../dist');
  });

  beforeEach(angular.mock.module('wfm.appform'));

  beforeEach(function() {
    var self = this;

    inject(function($rootScope, $compile) {
      self.scope = $rootScope.$new();

      self.element = "<appform-field-dropdown></appform-field-dropdown>";

      //The function that is executed whenever a value changes.
      self.updateValueSpy = sinon.spy();

      //Setting A dummy field on the controller scope.
      self.scope.field = {
        _id: "dropdownfieldid",
        name: "Dropdown Field",
        fieldOptions: {
          definition: {
            include_blank_option: true,
            options: [
              {
                label: 'foo',
                checked: false
              }, {
                label: 'bar',
                checked: true
              }
            ]
          }
        },
        updateValue: self.updateValueSpy
      };

      self.element = $compile(self.element)(self.scope);
      self.scope.$digest();

      self.element.data('$appformFieldDropdownController', {});
      self.fieldDropdownCtrl = self.element.scope().fieldDropdownCtrl;
    });
  });

  it("There should only be one select element", function() {
    should(this.element.find('md-select').length).equal(1);
  });

  it("There should be no input elements", function() {
    should(this.element.find('input').length).equal(0);
  });

  it("There should be three options", function() {
    should(this.element.find('md-option').length).equal(3);
    should(this.element.find('md-option')[0].textContent.trim()).equal('');
    should(this.element.find('md-option')[1].textContent.trim()).equal('foo');
    should(this.element.find('md-option')[2].textContent.trim()).equal('bar');
  });

  it("The third option should be checked", function() {
    should(this.element.find('md-option')[2].getAttribute('selected')).equal('selected');
  });

  it("The model should be set to fieldDropdownCtrl.field.value", function() {
    should(this.element.find('md-select').attr('ng-model')).equal('fieldDropdownCtrl.field.value');
  });

  it("Setting a value on the scope should give a default value", function() {
    var self = this;
    self.fieldDropdownCtrl.field.value = {'label': 'foo', 'checked': true};
    self.scope.$apply();

    should(this.element.find('md-option')[1].getAttribute('selected')).equal('selected');
  });
});