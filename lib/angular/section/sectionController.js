
/*global angular:true*/

/**
 *
 * Controller for each of the sections in a page.
 *
 * @param $scope
 * @constructor
 */
function SectionController($scope) {

  this.section = $scope.section;
}

angular.module('wfm.appform').controller('SectionController', ['$scope', SectionController]);