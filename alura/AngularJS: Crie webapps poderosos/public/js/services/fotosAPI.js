angular.module('app').factory('FotosAPI', function($http){
  var _getFotos =  function (){
    return $http.get('/v1/fotos');
  };
  return {
    getFotos: _getFotos,
  };
});
