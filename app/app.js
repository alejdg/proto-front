'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'myApp.home',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.clients',
  'myApp.networks',
  'ui.utils',
  'keepr',
  'angularUtils.directives.dirPagination'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])

// .factory('Data', function ($http) {
//   // var data = {
//   //   clients = {},
//   //   networworks = {}
//   // }

//   return {
//     getClients: function () {
//       $http.get('data/clients.json').success(function (data) {
//         return data;
//       })
//     },
//     getNetworks: function () {
//       $http.get('data/networks.json').success(function (data) {
//         return data;
//       })
//     }
//   }
// });


// todo
// mover controller para view index
angular.module('ui.bootstrap').controller('TabsCtrl', function ($scope, $window) {
  $scope.tabs = [
    { title:'Cargos', content:'Dynamic content 1', link:'#/view1', active: false },
    { title:'Usuários', content:'Dynamic content 2', link:'#/view2', active: false, disabled: true },
    { title:'Clientes', link:'#/clients', active: false},
    { title:'Redes', content:'Dynamic content 2', link:'#/networks', active: false},
    { title:'Grupos', content:'Dynamic content 2', link:'#/', active: false}
  ];

});