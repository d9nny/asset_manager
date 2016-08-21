'use strict';

angular.module('assetManagerApp')
  .service('AssetModel', ['$http', 'ENDPOINT_URI', function($http, ENDPOINT_URI) {
  	var service = this;
  	path = 'assets/'

  	function getUrl() {
		  return ENDPOINT_URI + path;
		}
		function getUrlForId(assetID) {
		  return getUrl(path) + assetID;
		}

  	service.all = function () {
		  return $http.get(getUrl());
		};
		service.fetch = function (assetID) {
		  return $http.get(getUrlForId(assetID));
		};
		service.create = function (item) {
		  return $http.post(getUrl(), item);
		};
		service.update = function (assetID, item) {
		  return $http.put(getUrlForId(assetID), item);
		};
		service.destroy = function (assetID) {
		  return $http.delete(getUrlForId(assetID));
		};

  }]);
