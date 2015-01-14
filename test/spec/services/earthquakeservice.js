'use strict';

describe('Service: earthquakeService', function () {

  // load the service's module
  beforeEach(module('angularLeafletApp'));

  // instantiate service
  var earthquakeService;
  beforeEach(inject(function (_earthquakeService_) {
    earthquakeService = _earthquakeService_;
  }));

  it('should do something', function () {
    expect(!!earthquakeService).toBe(true);
  });

});
