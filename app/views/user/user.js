  
angular.module('myApp.clients', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/clients', {
    templateUrl: 'views/client/client.html',
    controller: 'ClientCtrl'
  });
}])

.controller('ClientCtrl', [ '$scope', '$http',
  function ($scope, $http) {
  
  $scope.cnpjMask = '99.999.999/9999-99';
  $scope.zipcodeMask = '99999-999';
  $scope.pageSize = 10;
  var clientsDataUrl = 'data/clients.json';
  var networksDataUrl = 'data/networks.json';

  
  $http.get(clientsDataUrl).success(function (data) {
    $scope.clients = data;
  });

  $http.get(networksDataUrl).success(function (data) {
    $scope.networks = data;
  });



  $scope.addRow = function () {
    $scope.clients.push({
      'fantasyName': $scope.fantasyName,
      'corporateName': $scope.corporateName,
      'cnpj': $scope.cnpj,
      'network': $scope.network.name,
      'city': $scope.city,
      'state': $scope.state,
      'street': $scope.street,
      'zipcode': $scope.zipcode,
      'isEnabled': true
    });
    $scope.fantasyName='',
    $scope.corporateName='',
    $scope.cnpj=' ',
    $scope.city='',
    $scope.state='',
    $scope.street='',
    $scope.zipcode=''
    $scope.network=''
    //$scope.save();
  };

  $scope.save = function () {
    $http.post(clientsDataUrl, $scope.networks)
    .then(function (data) {
      $scope.msg = 'Data saved'
    })
  }
}]);
