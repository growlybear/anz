'use strict';

/**
 * @ngdoc service
 * @name angularLeafletApp.earthquakeService
 * @description
 * # earthquakeService
 * Service in the angularLeafletApp.
 */
angular.module('angularLeafletApp')
  .service('earthquakeService', function ($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    function handleSuccess(response) {
      return response.data;
    }

    function handleError(response) {
      var err;

      // Normalise unknown server errors
      if (!angular.isObject(response.data) || !response.data.message) {
        err = 'An unknown error occurred';
      }
      // Otherwise, return response error message
      else {
        err = response.data.message;
      }

      //
      return $q.reject(err);
    }

    function getData() {
      // NOTE: We need a proxy backend since seismi.org doesn't support either CORS _or_ JSONP
      // See https://www.npmjs.com/package/cors-anywhere
      var proxy = 'https://cors-anywhere.herokuapp.com/';

      var request = $http({
        method: 'GET',
        url: proxy + 'www.seismi.org/api/eqs/'
      });

      return request.then(
        handleSuccess,
        handleError
      );
    }

    // Public API
    return {
      getData: getData
    };
  });
