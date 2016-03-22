module.exports = function(app){
  app.get('/produtos', function(request, response){
    var con           = app.infra.connectionDB();
    var produtosBanco = app.infra.produtosBanco(con);
    produtosBanco.lista(function(err, results){
      response.render('produtos/lista', {lista: results});
    });
    con.end();
  });
};
