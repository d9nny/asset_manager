'use strict';

describe('Controller: AssetsCtrl', function () {

  // load the controller's module
  beforeEach(module('assetManagerApp'));

  var AssetsCtrl,
      scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AssetsCtrl = $controller('AssetsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should get all assets', function () {
    expect(AssetsCtrl.all).toBe(3);
  });
});
