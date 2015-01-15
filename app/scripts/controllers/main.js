'use strict';

/**
 * @ngdoc function
 * @name angularLeafletApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularLeafletApp
 */
angular.module('angularLeafletApp')
  .controller('MainCtrl', ['$scope', 'earthquakeService', function ($scope, earthquakeService) {
    angular.extend($scope, {
      hyderabad: {
        lat: 15.31,
        lng: 78.38,
        zoom: 3
      },
      markers: {},
      quakesCount: 0
    });

    earthquakeService.getData()
      .then(function (data) {
        var temp = {};

        $scope.quakesCount = data.count;

        // Iterate over the JSON returned from remote API and format for markers
        data.earthquakes.forEach(function (datum) {
          temp[datum.eqid] = {
            lat: parseFloat(datum.lat, 10),
            lng: parseFloat(datum.lon, 10),
            message: 'Region: ' + datum.region + '<br/>Magnitude: ' + datum.magnitude,
            focus: false,
            draggable: false
          };
        });

        // Update the earthquake models (once only, for performance) to place markers on the map
        $scope.markers = temp;
      });
  }]);
