'use strict';

/**
 * @ngdoc overview
 * @name assetManagerApp
 * @description
 * # assetManagerApp
 *
 * Main module of the application.
 */
angular
  .module('assetManagerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .constant('ENDPOINT_URI', 'http://localhost:3000/api/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/assets', {
        templateUrl: 'views/assets.html',
        controller: 'AssetsCtrl',
        controllerAs: 'assets'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
