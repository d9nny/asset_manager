'use strict';

describe('Controller: AssetsCtrl', function () {

  // load the controller's module
  beforeEach(module('assetManagerApp'));

  var AssetsCtrl,
      assetModelMock,
      scope,
      asset = {id: 0, name: 'car', type: 'transport', qty: 5},
      types = ['transport', 'tech'],

      assets = [{id: 0, name: 'car', type: 'transport', qty: 5}, 
                {id: 1, name: 'bike', type: 'transport', qty: 20}, 
                {id: 2, name: 'van', type: 'transport', qty: 2}, 
                {id: 3, name: 'printer', type: 'tech', qty: 3}, 
                {id: 4, name: 'computer', type: 'tech', qty: 20}],

      assetsSorted = [ {id: 1, name: 'bike', type: 'transport', qty: 20},
                        {id: 0, name: 'car', type: 'transport', qty: 5},
                        {id: 4, name: 'computer', type: 'tech', qty: 20},  
                        {id: 3, name: 'printer', type: 'tech', qty: 3},
                        {id: 2, name: 'van', type: 'transport', qty: 2} ],

      assetsRevSorted = [ {id: 2, name: 'van', type: 'transport', qty: 2},
                          {id: 3, name: 'printer', type: 'tech', qty: 3},
                          {id: 4, name: 'computer', type: 'tech', qty: 20}, 
                          {id: 0, name: 'car', type: 'transport', qty: 5},
                          {id: 1, name: 'bike', type: 'transport', qty: 20} ]; 


  module(function($provide) {
    $provide.service('AssetModel', function() {
      this.all = jasmine.createSpy('all').andCallFake(function() { return assets; }); 
      this.create = jasmine.createSpy('create').andCallFake(function(asset) { return assets; }); 
      this.update = jasmine.createSpy('update').andCallFake(function(asset.id, asset_update) { return assets; }); 
      this.destroy = jasmine.createSpy('destroy').andCallFake(function(asset.id) { return assets; }); 
    });
  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, AssetModel) {
    scope = $rootScope.$new();
    AssetsCtrl = $controller('AssetsCtrl', {
      $scope: scope
    });
    assetModelMock = AssetModel;
  }));

  describe('On Initialize', function() { 
    it('should get all assets', function () {
      expect(scope.all).toEqual(assets);
    });
    it('should get all types', function () {
      expect(scope.types).toEqual(types);
    });
  });

  describe('Function: new', function() { 
    it('should call the service to create as asset', function () {
      spyOn(assetModelMock,'create');
      scope.new(asset);
      expect(scope.create).toHaveBeenCalledWith(asset);
    });
  });

  describe('Function: update', function() { 
    it('should call the service to update as asset', function () {
      spyOn(assetModelMock,'update');
      AssetsCtrl.update(asset);
      expect(assetModelMock.update).toHaveBeenCalledWith(asset.id, asset);
    });
  });

  describe('Function: delete', function() { 
    it('should call the service to delete as asset', function () {
      spyOn(assetModelMock,'destroy');
      AssetsCtrl.delete(asset);
      expect(assetModelMock.destroy).toHaveBeenCalledWith(asset.id);
    });
  });

  describe('Function: filter', function() { 
    it('change the filter to the input value', function () {
      AssetsCtrl.setFilter(asset.type);
      expect(AssetsCtrl.filter).toEqual (asset.type);
    });
  });

  describe('Function: sortAZ', function() { 
    it('sorts the assets in alphabetical order by name', function () {
      AssetsCtrl.sortAZ();
      expect(AssetsCtrl.all).toEqual (assetsSorted);
    });
    it('changes the variable alphabetical to true', function () {
      AssetsCtrl.sortAZ();
      expect(AssetsCtrl.alphabetical).toEqual (true);
    });
  });

  describe('Function: sortZA', function() { 
    it('sorts the assets in reverse alphabetical order by name', function () {
      AssetsCtrl.sortZA();
      expect(AssetsCtrl.all).toEqual (assetsRevSorted);
    });
    it('changes the variable alphabetical to false', function () {
      AssetsCtrl.sortAZ();
      expect(AssetsCtrl.alphabetical).toEqual (false);
    });
  });

});