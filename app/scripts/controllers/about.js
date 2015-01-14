'use strict';

/**
 * @ngdoc function
 * @name angularLeafletApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularLeafletApp
 */
angular.module('angularLeafletApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
