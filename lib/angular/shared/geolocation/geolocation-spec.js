'use strict';

/* globals inject */
/*global navigator:true*/

var sinon = require('sinon'),
  angular = require('angular'),
  //should = require('should'),
  initModule = require('../../../../test/initModule');
require('angular-mocks');

describe("Test Geolocation Service", function() {
  //Setting up a mock module to test.
  before(function() {
    initModule();
    // Import the geolocation service
    require('./geolocationService');
  });

  beforeEach(angular.mock.module('wfm.appform'));
  beforeEach(inject(function(GeolocationService) {
    this.GeolocationService = GeolocationService;
  }));

  it('The getGeolocation service method should return coordinates when navigator is available and an error message when not available', function() {

    // mock success/error responses
    var expectedResponse = {coords: {latitude: 52.251198099999996, longitude : -7.1534572999999995}};
    var mockErr = {code: 1, message: "User denied Geolocation"};

    // setup stub
    var getCurrentPositionStub = sinon.stub();
    navigator.geolocation = {};
    navigator.geolocation.getCurrentPosition = getCurrentPositionStub;

    // Stubs the method only for the provided arguments which must be functions
    var callService = getCurrentPositionStub.withArgs(sinon.match.func, sinon.match.func);
    // specify arguments to pass to the callback, the stub will call back with a valid location on the first call and an error on the second.
    callService.onCall(0).callsArgWith(0, expectedResponse);
    callService.onCall(1).callsArgWith(1, mockErr);

    // setup spy, this will spy on the getGeolocation method in the Geolocation Service
    var spy = sinon.spy();

    // check the getGeolocation method is called, expect a success response with the mocked postion object
    this.GeolocationService.getGeolocation(spy);
    sinon.assert.calledOnce(spy);
    sinon.assert.calledWith(spy, null, sinon.match(expectedResponse));

    // check the getGeolocation method is called a second time, expect an error response with the mocked error object
    this.GeolocationService.getGeolocation(spy);
    sinon.assert.calledTwice(spy);
    sinon.assert.calledWith(spy, sinon.match(mockErr), null);
  });

});
