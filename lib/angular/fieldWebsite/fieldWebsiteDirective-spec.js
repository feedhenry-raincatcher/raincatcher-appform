/* globals inject */

var angular = require('angular');
var should = require('should');
var sinon = require('sinon');
require('angular-mocks');
var initModule = require('../../../test/initModule');

describe("Website Field Directive", function() {

  before(function() {
    initModule();

    //The website directive is the directive under test.
    require('./fieldWebsiteController');
    require('./fieldWebsiteDirective');

    //Requiring all of the templates to be able to render the html
    //TODO: Look into a better way of organising templates.
    require('../../../dist');
  });

  beforeEach(angular.mock.module('wfm.appform'));

  beforeEach(function() {
    var self = this;

    inject(function($rootScope, $compile) {
      self.scope = $rootScope.$new();

      self.element = "<appform-field-website></appform-field-website>";

      //The function that is executed whenever a value changes.
      self.updateValueSpy = sinon.spy();

      //Setting A dummy field on the controller scope.
      self.scope.field = {
        _id: "websitefieldid",
        name: "Website Field",
        updateValue: self.updateValueSpy
      };

      self.element = $compile(self.element)(self.scope);
      self.scope.$digest();

      self.element.data('$appformFieldWebsiteController', {});
      self.fieldWebsiteCtrl = self.element.scope().fieldWebsiteCtrl;
    });
  });

  it("There should only be one input element", function() {
    should(this.element.find('input').length).equal(1);
  });

  it("It should be an website element", function() {
    should(this.element.find('input').attr('type')).equal('website');
  });

  it("The model should be set to fieldWebsiteCtrl.field.value", function() {
    should(this.element.find('input').attr('ng-model')).equal('fieldWebsiteCtrl.field.value');
  });

  it("Setting a value on the scope should give set a default value", function() {
    var self = this;
    self.fieldWebsiteCtrl.field.value = 'test@test.com';
    self.scope.$apply();

    should(self.element.find('input').val()).equal('test@test.com');
  });

});