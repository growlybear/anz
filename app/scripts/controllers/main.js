'use strict';

/**
 * @ngdoc function
 * @name angularLeafletApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularLeafletApp
 */
angular.module('angularLeafletApp', [
  'leaflet-directive'
])
.controller('MainCtrl', ['$scope', 'earthquakeService', function ($scope, earthquakeService) {
  angular.extend($scope, {
    pacificRim: {
      lat: 18.0,
      lng: 200.0,
      zoom: 3
    }
  });

  earthquakeService.getData()
    .then(function (data) {
      $scope.earthquakes = data;

      // FIXME Proof of concept for successful x-domain request
      console.log($scope.earthquakes);
    });


}]);
