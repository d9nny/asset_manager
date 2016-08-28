'use strict';

describe('Factory: Api', function () {

  // load the controller's module
  beforeEach(module('assetManagerApp'));

  var 	apiMock,
  			httpBackend,
  			url = "http://localhost:3000/api/Assets/",
				response = [{id: 0, name: 'car', type: 'transport', qty: 5}, {id: 1, name: 'bike', type: 'transport', qty: 20}, {id: 2, name: 'BMW', type: 'transport', qty: 5}, {id: 0, name: 'laptop', type: 'tech', qty: 80}];

  // Initialize the controller and a mock scope
  beforeEach(inject(function (Api, $httpBackend) {
    apiMock = Api;
    httpBackend = $httpBackend
    httpBackend
      .expectGET("http://localhost:3000/api/Assets/")
      .respond(
        response
      );
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  // describe('getAll', function() {
  //   it('gets all the database records', function() {      
  //     expect(apiMock.getAll(url)).toEqual(response);
  //     httpBackend.flush();
  //   });
  // });
});
