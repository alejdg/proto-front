  
angular.module('myApp.clients', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/clients', {
    templateUrl: 'partials/viewClient/viewClient.html',
    controller: 'ViewClientCtrl'
  });
}])

.controller('ViewClientCtrl', ['$scope', 
  function($scope) {

  
  $scope.cnpjMask = '99.999.999/9999-99';
  $scope.zipcodeMask = '99999-999';

  $scope.pageSize = 10;

  $scope.clients = [
    {
      'fantasyName': 'empresa teste 1',
      'corporateName': 'teste 1 LTDA',
      'cnpj': '111111111-1',
      'city': 'Testelandia',
      'state': 'PR',
      'street': 'Ruuuua 1',
      'zipcode': '17500-111',
      'isEnabled': true
    },
    {
      'fantasyName': 'empresa teste 2',
      'corporateName': 'teste 2 LTDA',
      'cnpj': '111111111-2',
      'city': 'Testelópolis',
      'state': 'PA',
      'street': 'Ruuuua 2',
      'zipcode': '17500-222',
      'isEnabled': true
    },
    {
      'fantasyName': 'empresa teste 3',
      'corporateName': 'teste 3 LTDA',
      'cnpj': '111111111-3',
      'city': 'Ilha do Teste',
      'state': 'AM',
      'street': 'Ruuuua 3',
      'zipcode': '17500-333',
      'isEnabled': true
    }
  ];


  $scope.addRow = function () {
    $scope.clients.push({
      'fantasyName': $scope.fantasyName,
      'corporateName': $scope.corporateName,
      'cnpj': $scope.cnpj,
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
  };
}]);