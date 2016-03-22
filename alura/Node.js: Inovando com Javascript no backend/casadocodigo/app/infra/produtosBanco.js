module.exports = function(){
  return function(connection){
    var _lista = function(callback){
      connection.query('SELECT * FROM livros', callback);
    };
    return {
      lista: _lista,
    };

  };
};
