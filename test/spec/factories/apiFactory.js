'use strict';

describe('Factory: Api', function () {

  // load the controller's module
  beforeEach(module('assetManagerApp'));

  var 	apiMock,
  			httpBackend,
  			url = "http://localhost:3000/api/Assets/",
  			asset = {id: 0, name: 'car', type: 'transport', qty: 5},
				response = [{id: 0, name: 'car', type: 'transport', qty: 5}, {id: 1, name: 'bike', type: 'transport', qty: 20}, {id: 2, name: 'BMW', type: 'transport', qty: 5}, {id: 0, name: 'laptop', type: 'tech', qty: 80}];

  // Initialize the controller and a mock scope
  beforeEach(inject(function (Api, $httpBackend) {
    apiMock = Api;
    httpBackend = $httpBackend;
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation(false);
    httpBackend.verifyNoOutstandingRequest();
  });

  describe('getAll', function() {
    it('should send a HTTP GET request to get all the database records', function() {      
      httpBackend.expectGET(url)
      	.respond(200, response);

      apiMock.getAll(url);
      httpBackend.flush(); 
    });
  });

  describe('create', function() {
    it('should send a HTTP POST request to create a new asset', function() {      
      httpBackend.expectPOST(url, asset)
      	.respond(200, response);

      apiMock.create(url, asset);
      httpBackend.flush();   
    });
  });

  describe('update', function() {
    it('should send a HTTP PUT request to update an asset', function() {      
	    httpBackend.expectPUT(url, asset)
	    	.respond(200, response);

	    apiMock.update(url, asset);
	    httpBackend.flush();  
    });
  });

  describe('destroy', function() {
    it('should send a HTTP DELETE request to destroy an asset', function() {      
	    apiMock.destroy(url); 
      httpBackend.expectDELETE(url)
	      .respond(200, response);
	    httpBackend.flush(); 
    });
  });

});
