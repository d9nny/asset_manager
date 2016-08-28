'use strict';

describe('Controller: AssetsCtrl', function () {

  // load the controller's module
  beforeEach(module('assetManagerApp'));

  var AssetsCtrl,
      scope,
      apiMock,
      httpBackend,
      asset = {id: 0, name: 'car', type: 'transport', qty: 5},
      asset_update = {id: 0, name: 'car', type: 'transport', qty: 5},
      types = ['transport', 'tech'],
      url = 'http://localhost:3000/api/Assets/',
      response = [{id: 0, name: 'car', type: 'transport', qty: 5}, {id: 1, name: 'bike', type: 'transport', qty: 20}, {id: 2, name: 'BMW', type: 'transport', qty: 5}, {id: 0, name: 'laptop', type: 'tech', qty: 80}];

  module(function($provide) {
    $provide.factory('Api', function() {
      this.getAll = jasmine.createSpy('getAll').andCallFake(function() {}); 
      this.create = jasmine.createSpy('create').andCallFake(function() {});
      this.update = jasmine.createSpy('update').andCallFake(function() {});  
      this.destroy = jasmine.createSpy('destroy').andCallFake(function() {}); 
    });
  });

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, Api, $httpBackend) {
    scope = $rootScope.$new();
    apiMock = Api;
    AssetsCtrl = $controller('AssetsCtrl', { $scope: scope}, Api);
    httpBackend = $httpBackend
    httpBackend
      .expectGET("http://localhost:3000/api/Assets/")
      .respond(
        response
      );
      AssetsCtrl.all = response;
    scope.$apply(); 
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation(false);
    httpBackend.verifyNoOutstandingRequest();
  });
  
  describe('On Initialize', function() { 
    it('should call factory.getAll', function () {
      spyOn(apiMock,'getAll');
      httpBackend.flush();
      expect(AssetsCtrl.all.length).toEqual(4);
    });
    it('should get all types', function () {
      spyOn(apiMock,'getAll');
      httpBackend.flush();
      expect(AssetsCtrl.types).toEqual (types);
    });
  });

  describe('Function: new', function() { 
    it('should call the factory to create as asset', function () {
      spyOn(apiMock,'create');
      AssetsCtrl.newAsset = asset;
      AssetsCtrl.new(url);
      httpBackend.flush();
      expect(apiMock.create).toHaveBeenCalledWith(url, asset);
    });
  });

  describe('Function: update', function() { 
    it('should call the factory to update as asset', function () {
      spyOn(apiMock,'update');
      AssetsCtrl.update(asset.id, asset);
      httpBackend.flush();
      expect(apiMock.update).toHaveBeenCalledWith(url + asset.id, asset);
    });
  });

  describe('Function: delete', function() { 
    it('should call the factory to delete as asset', function () {
      spyOn(apiMock,'destroy');
      AssetsCtrl.delete(asset.id, asset);
      httpBackend.flush();
      expect(apiMock.destroy).toHaveBeenCalledWith(url + asset.id);
    });
  });

  describe('Function: filter', function() { 
    it('change the filter to the input value', function () {
      AssetsCtrl.setFilter(asset.type);
      httpBackend.flush();
      expect(AssetsCtrl.filter).toEqual (asset.type);
    });
  });

  describe('Function: sortAZ', function() { 
    it('sorts the assets in alphabetical order by name', function () {
      AssetsCtrl.sortAZ();
      httpBackend.flush();
      expect(AssetsCtrl.all).toEqual (response);
    });
    it('changes the variable alphabetical to true', function () {
      AssetsCtrl.sortAZ();
      httpBackend.flush();
      expect(AssetsCtrl.alphabetical).toEqual (true);
    });
  });

  describe('Function: sortZA', function() { 
    it('sorts the assets in reverse alphabetical order by name', function () {
      AssetsCtrl.sortZA();
      httpBackend.flush();
      expect(AssetsCtrl.all).not.toEqual (response);
    });
    it('changes the variable alphabetical to false', function () {
      AssetsCtrl.sortZA();
      httpBackend.flush();
      expect(AssetsCtrl.alphabetical).not.toEqual (false);
    });
  });

});