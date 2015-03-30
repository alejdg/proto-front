  
angular.module('myApp.roles', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/roles', {
    templateUrl: 'views/role/role.html',
    controller: 'RoleCtrl'
  });
}])

.controller('RoleCtrl', [ '$scope', '$http',
  function ($scope, $http) {

  var rolesDataUrl = 'data/roles.json';

  $http.get(rolesDataUrl).success(function (data) {
    $scope.roles = data;
  });
  
  $scope.pageSize = 10;

  $scope.addRow = function () {
    $scope.roles.push({
      'name': $scope.name,
    });
    $scope.name='';
    //$scope.save();
  };

  $scope.save = function () {
    $http.post(rolesDataUrl, $scope.roles)
    .then(function (data) {
      $scope.msg = 'Data saved'
    })
  }
}]);
