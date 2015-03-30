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
    { title:'Usuários', content:'Dynamic content 2', link:'#/view2', active: false, disabled: true },
    { title:'Clientes', link:'#/clients', active: false},
    { title:'Redes', content:'Dynamic content 2', link:'#/networks', active: false},
    { title:'Grupos', content:'Dynamic content 2', link:'#/', active: false}
  ];

});