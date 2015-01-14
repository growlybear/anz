'use strict';

/**
 * @ngdoc function
 * @name angularLeafletApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularLeafletApp
 */
angular.module('angularLeafletApp', ['leaflet-directive'])
  .controller('MainCtrl', function ($scope) {
    angular.extend($scope, {
      center: {
        lat: 35.460669951495305,
        lng: 101.77734374999999,
        zoom: 3
      }
    });
  });
