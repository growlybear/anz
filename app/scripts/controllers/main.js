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
.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
  angular.extend($scope, {
    pacificRim: {
      lat: 18.0,
      lng: 200.0,
      zoom: 3
    }
  });

  var url = 'http://www.seismi.org/api/eqs/';
  $http.jsonp(url + '?callback=JSON_CALLBACK')
    .success(function (data) {
      $scope.earthquakes = data;
    });

}]);
