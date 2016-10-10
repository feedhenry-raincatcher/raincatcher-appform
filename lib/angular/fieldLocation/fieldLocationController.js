
/*global angular:true*/

/**
* The Field Location controller.
* @param $scope - the $scope injection
* @param GeolocationService - the geolocation service which returns the current position
*/

function FieldLocationController($scope, GeolocationService) {
  var fieldLocationCtrl = this;
  fieldLocationCtrl.field = $scope.field;

  if (!fieldLocationCtrl.field.values[0]) {
    fieldLocationCtrl.field.values[0] = {};
  }

  //TODO Repeating Fields
  fieldLocationCtrl.field.value = fieldLocationCtrl.field.values[0];

  /**
  * Attempt to set the current position in the input fields if the current position can be obtained.
  * Otherwise show a relevant error message to the user.
  */
  fieldLocationCtrl.setLocation = function(event) {
    event.stopPropagation();

    /*
    * Get the current position from the Geolocation Service.
    */
    GeolocationService.getGeolocation(function(err, response) {
      if (err) {
        $scope.$apply(function() {
          // return a relevant error message in the UI
          fieldLocationCtrl.field.err = err.message ? err.message : err;
        });
        return;
      }
      $scope.$apply(function() {
        // set the longitude/latitude
        fieldLocationCtrl.field.value.lat = response.coords.latitude;
        fieldLocationCtrl.field.value.long = response.coords.longitude;
      });
    });

    /**
    * Apply the longitude/latitude on the scope.
    * @param latitude - the latitude to set
    * @param longitude - the longitude to set
    */
    fieldLocationCtrl.applyValues = function(latitude, longitude) {
      $scope.$apply(function() {
        fieldLocationCtrl.field.value.lat = parseFloat(latitude);
        fieldLocationCtrl.field.value.long = parseFloat(longitude);
      });
    };

    /*
    * Update scope values on input change
    */
    fieldLocationCtrl.updateModel = function() {
      $scope.field.values[0] = fieldLocationCtrl.field.value;
    };
  };
}

angular.module('wfm.appform').controller('FieldLocationController', ['$scope', 'GeolocationService', FieldLocationController]);

module.exports = "wfm.appform.FieldLocationController";
