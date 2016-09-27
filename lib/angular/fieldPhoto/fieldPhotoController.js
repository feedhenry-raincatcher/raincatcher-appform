
/*global angular:true*/

function FieldPhotoController($scope, $window) {
  var fieldPhotoCtrl = this;
  fieldPhotoCtrl.field = $scope.field;

  fieldPhotoCtrl.isValid = function(form, element) {
    console.log('form', form);
    console.log('element', element);
  };

  fieldPhotoCtrl.capture = function(event) {
    event.stopPropagation();

    //TODO: Need services to capture photos.
    if ($window.cordova) {
      //Capturing Cordova.
      console.log("Capturing Photo Cordova");
    } else {
      console.log("Capturing Photo Desktop");
    }
  };

}

angular.module('wfm.appform').controller('FieldPhotoController', ['$scope', '$window', FieldPhotoController]);