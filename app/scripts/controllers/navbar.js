'use strict';

angular.module('assetManagerApp')
  .controller('NavbarCtrl', ['$location', function ($location) {
  	var navbar = this;

  	navbar.isActive = function (viewLocation) {
     	var active = (viewLocation === $location.path());
     	return active;
		};
  }]);

