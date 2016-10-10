/* globals inject */

var angular = require('angular');
var should = require('should');
var sinon = require('sinon');
require('angular-mocks');
// Using jquery to select UI elements more easily
var $ = require('jquery');
var initModule = require('../../../test/initModule');

describe("Location Field Directive", function() {

  before(function() {
    initModule();

    require('./fieldLocationController');
    //The location directive is the directive under test.
    require('./fieldLocationDirective');
    // Import the geolocation service
    require('../shared/geolocation/geolocationService');

    //Requiring all of the templates to be able to render the html
    //TODO: Look into a better way of organising templates.
    require('../../../dist');
  });

  beforeEach(angular.mock.module('wfm.appform'));

  beforeEach(function() {
    var self = this;

    inject(function($rootScope, $compile) {
      self.scope = $rootScope.$new();

      self.element = "<appform-field-location></appform-field-location>";

      //The function that is executed whenever a value changes.
      self.updateValueSpy = sinon.spy();

      //Setting A dummy field on the controller scope.
      self.scope.field = {
        _id: "locationfieldid",
        name: "Location Field",
        values: {},
        updateValue: self.updateValueSpy
      };

      self.element = $compile(self.element)(self.scope);
      self.scope.$digest();

      self.element.data('$appformFieldLocationController', {});
      self.fieldLocationCtrl = self.element.scope().fieldLocationCtrl;
    });
  });

  it("There should be two input elements", function() {
    should(this.element.find('input').length).equal(2);
  });

  it("They should be number inputs", function() {
    should(this.element.find('input').attr('type')).equal('number');
    should($(this.element).find('input[name="inputNameY"]').attr('type')).equal('number');
  });

  it("The model should be set to fieldLocationCtrl.field.value.lat", function() {
    should(this.element.find('input').attr('ng-model')).equal('fieldLocationCtrl.field.value.lat');
  });

  it("The model should be set to fieldLocationCtrl.field.value.long", function() {
    should($(this.element).find('input[name="inputNameY"]').attr('ng-model')).equal('fieldLocationCtrl.field.value.long');
  });

  it("Setting a value on the scope should give set a default latitude value", function() {
    var self = this;
    self.fieldLocationCtrl.field.value.lat = 23;
    self.scope.$apply();

    should(parseInt(self.element.find('input').val())).equal(23);
  });

  it("Setting a value on the scope should give set a default longitiude value", function() {
    var self = this;
    self.fieldLocationCtrl.field.value.long = 12;
    self.scope.$apply();

    should(parseInt($(this.element).find('input[name="inputNameY"]').val())).equal(12);
  });

});
