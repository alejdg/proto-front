'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'myApp.home',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.roles',
  'myApp.clients',
  'myApp.networks',
  'ui.utils',
  'keepr',
  'angularUtils.directives.dirPagination'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])

// todo
// mover controller para view index
angular.module('ui.bootstrap').controller('TabsCtrl', function ($scope, $window) {
  $scope.tabs = [
    { title:'Cargos', link:'#/roles', active: false },
    { title:'Usuários', link:'#/users', active: false, disabled: false },
    { title:'Grupos de Usuários', link:'#/user/groups', active: false },
    { title:'Produtos', link:'#/products', active: false },
    { title:'Clientes', link:'#/clients', active: false},
    { title:'Produtos por Cliente', link:'#/client/products', active: false },
    { title:'Redes', link:'#/networks', active: false},
    { title:'Relatórios', link:'#/reports', active: false },
  ];

});