angular.module('app').controller('FotosController', function($scope, FotosAPI){
  $scope.fotos = [];
  FotosAPI.getFotos().then(function(results){
    $scope.fotos = results.data;
  }, function(erro){
    console.log(erro);
  });
});
