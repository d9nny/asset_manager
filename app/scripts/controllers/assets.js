'use strict';

angular.module('assetManagerApp')
  .controller('AssetsCtrl', ['AssetModel', function(AssetModel) {
  	var ctrl = this,
  			service = AssetModel;

  	function getAll() {
			// service.all()
			// 	.then(function(result) {
			// 		ctrl.all = result.data;
			// 	})
			// console.log(ctrl.all);
			ctrl.all = service.all()
  	}

  	function getTypes() {
			var tempArray = [];
  		for(var i=0; i < ctrl.all.length; i++) {
				tempArray.push(ctrl.all[i].type)
			}
			ctrl.types = tempArray.filter(function(item, pos) {
				return tempArray.indexOf(item) == pos;
			})
  	}

  	getAll();
		getTypes();
  	
  	ctrl.new = function(asset) {
  		service.create(asset);
  	}

  	ctrl.update = function(assetID, asset) {
  		service.update(assetID, asset)
  	}

  	ctrl.delete = function(assetID) {
  		service.destroy(assetID);
  	}

  	ctrl.setFilter = function(filter) {
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
