'use strict';

angular.module('assetManagerApp')
  .controller('AssetsCtrl', ['AssetModel', '$location', function(AssetModel, $location) {
  	var ctrl = this,
  			AssetModel;

  	ctrl.alphabetical = true;

  	function getAll() {
			AssetModel.all()
				.then(function(result) {
					ctrl.all = result.data.sort(function(a,b) { 
            var textA = a.name.toUpperCase(),
                textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
          });
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
  		AssetModel.create(ctrl.newAsset);
      $location.path('/assets');
  	}

  	ctrl.update = function(assetID, asset) {
  		AssetModel.update(assetID, asset)
  	}

  	ctrl.delete = function(assetID, asset) {
  		AssetModel.destroy(assetID);
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
