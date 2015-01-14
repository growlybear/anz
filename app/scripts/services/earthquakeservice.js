'use strict';

/**
 * @ngdoc service
 * @name angularLeafletApp.earthquakeService
 * @description
 * # earthquakeService
 * Service in the angularLeafletApp.
 */
angular.module('angularLeafletApp')
  .service('earthquakeService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    // function handleSuccess(response) {
    //   return response.data;
    // }

    // function handleError(response) {
    //   var err;

    //   // Normalise unknown server errors
    //   if (!angular.isObject(response.data) || !response.data.message) {
    //     err = 'An unknown error occurred';
    //   }
    //   // Otherwise, return response error message
    //   else {
    //     err = response.data.message;
    //   }

    //   //
    //   return $q.reject(err);
    // }

    // function getData() {
    //   var request = $http({
    //     method: 'get',
    //     url: 'http://www.seismi.org/api/eqs/'
    //   });

    //   return request.then(
    //     handleSuccess,
    //     handleError
    //   );
    // }

    // Public API
    return {
      getData: function () {
        var url = 'http://www.seismi.org/api/eqs/';
        $http.jsonp(url+'&callback=JSON_CALLBACK')
          .success(function (data) {
            console.log(data.found);
          });
      }
    };
  });
