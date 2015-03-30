'use strict';

describe('myApp.viewRole module', function() {

  beforeEach(module('myApp.roles'));

  describe('viewRole controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var scope = {},
          ctrl = $controller('ViewRoleCtrl', {$scope:scope});
      expect(ctrl).toBeDefined();
    }));

  //   it('should create "roles" model with 3 roles', inject(function($controller) {
  //   var scope = {},
  //       ctrl = $controller('ViewRoleCtrl', {$scope:scope});

  //   expect(scope.roles.length).toBe(3);
  // }));

  });
});