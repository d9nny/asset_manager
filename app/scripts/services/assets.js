'use strict';

angular.module('assetManagerApp')
  .service('AssetModel', ['$http', 'ENDPOINT_URI', function($http, ENDPOINT_URI) {
  	var service = this,
  			path = 'Assets/';

  	function getUrl() {
		  return ENDPOINT_URI + path;
		}

		function getUrlForId(assetID) {
		  return getUrl(path) + assetID;
		}

  	service.all = function () {
		  return $http.get(getUrl());
		};

		service.create = function (item) {
		  return $http.post(getUrl(), item);
		}

		service.update = function (assetID, item) {
		  return $http.put(getUrlForId(assetID), item);
		}

		service.destroy = function (assetID) {
		  return $http.delete(getUrlForId(assetID));
		}

		service.sortAZ = function(assets) {
  		assets.sort(function(a,b) { 
  			var textA = a.name.toUpperCase(),
  					textB = b.name.toUpperCase();
		    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  		});
  		return assets;
  	}

  }]);
