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
    'ngTouch',
    'xeditable'
  ])
  .run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
  })
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
      .when('/assets/new', {
        templateUrl: 'views/assets_new.html',
        controller: 'AssetsCtrl',
        controllerAs: 'assets'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
