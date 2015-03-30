  
angular.module('myApp.networks', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/networks', {
    templateUrl: 'views/network/network.html',
    controller: 'NetworkCtrl'
  });
}])

.controller('NetworkCtrl', [ '$scope', '$http',
  function ($scope, $http) {

  var networksDataUrl = 'data/networks.json';

  $http.get(networksDataUrl).success(function (data) {
    $scope.networks = data;
  });
  
// .controller('NetworkCtrl ', function ($scope, Data) {
  // $scope.$watch(function () { return Data.getNetworks(); }, function (newValue, oldValue) {
  //   if (newValue !== oldValue) $scope.networks = newValue;
  // });
  
  $scope.pageSize = 10;

  $scope.addRow = function () {
    $scope.networks.push({
      'name': $scope.name,
      'description': $scope.description
    });
    $scope.name='';
    $scope.description='';
    //$scope.save();
  };

  $scope.save = function () {
    $http.post(networksDataUrl, $scope.networks)
    .then(function (data) {
      $scope.msg = 'Data saved'
    })
  }
}]);
