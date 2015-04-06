'use strict';

describe('myApp.viewClient module', function() {

  beforeEach(module('myApp.clients'));

  describe('viewClient controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var scope = {},
          ctrl = $controller('ClientCtrl', {$scope:scope});
      expect(ctrl).toBeDefined();
    }));

  //   it('should create "clients" model with 3 clients', inject(function($controller) {
  //   var scope = {},
  //       ctrl = $controller('ClientCtrl', {$scope:scope});

  //   expect(scope.clients.length).toBe(3);
  // }));

  });
});