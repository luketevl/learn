angular.module('app').controller('FotosController', function($scope, FotosAPI){

  $scope.fotos  = [];
  $scope.filtro = '';
  console.log($scope.filtro);
  FotosAPI.getFotos().then(function(results){
    $scope.fotos = results.data;
  }, function(erro){
    console.log(erro);
  });
});
