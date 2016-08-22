'use strict';

angular.module('assetManagerApp')
  .service('AssetModel', ['$http', 'ENDPOINT_URI', function($http, ENDPOINT_URI) {
  	var service = this,
  			path = 'assets/';

  	function getUrl() {
		  return ENDPOINT_URI + path;
		}

		function getUrlForId(assetID) {
		  return getUrl(path) + assetID;
		}

  	service.all = function () {
  		return service.sortAZ([{id: 0, name: 'car', type: 'transport', qty: 5}, { id: 1, name: 'bike', type: 'transport', qty: 20}, {id: 2, name: 'van', type: 'transport', qty: 2}, {id: 3, name: 'printer', type: 'tech', qty: 3}, {name: 'computer', type: 'tech', qty: 20}]);
		  // return $http.get(getUrl());
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
