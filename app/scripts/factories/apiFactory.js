'use strict';

angular.module('assetManagerApp')
  .factory('Api', ['$http', function($http) {

  	return {
	  	getAll: function (url) {
			  return $http.get(url);
			},

			create: function (url, item) {
			  return $http.post(url, item);
			},

			update: function (url, item) {
			  return $http.put(url, item);
			},

			destroy: function (url) {
			  return $http.delete(url);
			}
		}
}]);
