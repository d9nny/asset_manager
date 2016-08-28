'use strict';

angular.module('assetManagerApp')
  .controller('AssetsCtrl', ['Api', 'ENDPOINT_URI', '$location', function(Api, ENDPOINT_URI, $location) {
  	var ctrl = this,
        path = 'Assets/';

  	ctrl.alphabetical = true;

    function getUrl() {
      return ENDPOINT_URI + path;
    }

    function getUrlForId(assetID) {
      return getUrl(path) + assetID;
    }

  	function getAll() {
			Api.getAll(getUrl())
				.then(function(result) {
					ctrl.all = result.data;
          ctrl.sortAZ();
          getTypes();
				})
  	}

  	function getTypes() {
			var tempArray = [];
  		for(var i=0; i < ctrl.all.length; i++) {
				tempArray.push(ctrl.all[i].type);
			}
			ctrl.types = tempArray.filter(function(item, pos) {
				return tempArray.indexOf(item) == pos;
			});
  	}

  	getAll();
  	
  	ctrl.new = function() {
  		Api.create(getUrl(), ctrl.newAsset);
      $location.path('/assets');
  	}

  	ctrl.update = function(assetID, asset) {
  		Api.update(getUrlForId(assetID), asset)
  	}

  	ctrl.delete = function(assetID, asset) {
  		Api.destroy(getUrlForId(assetID));
      var index = ctrl.all.indexOf(asset);
      ctrl.all.splice(index, 1);     
  	}

  	ctrl.setFilter = function(filter) {
      var filter = filter || ctrl.searchTerm;
  		ctrl.filter = filter;
  	}

  	ctrl.sortAZ = function() {
  		ctrl.all.sort(function(a,b) { 
  			var textA = a.name.toUpperCase(),
  					textB = b.name.toUpperCase();
		    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  		});
			ctrl.alphabetical = true;
  	}

  	ctrl.sortZA = function() {
  		ctrl.all.sort(function(a,b) { 
  			var textA = a.name.toUpperCase(),
  					textB = b.name.toUpperCase();
		    return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
  		});
  		ctrl.alphabetical = false;
  	}
  }]);
