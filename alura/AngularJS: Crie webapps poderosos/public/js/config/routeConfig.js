angular.module('app').config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider.when('/fotos',{
    templateUrl: '/../../views/partials/principal.html',
    controller: 'FotosController',
  });
});
