module.exports = function(app){
  app.get('/produtos', function(request, response){
    var con           = app.infra.connectionDB();
    var produtosBanco = app.infra.produtosBanco(con);
    produtosBanco.lista(function(err, results){
      response.render('produtos/lista', {lista: results});
    });
    con.end();
  });

  app.get('/produtos/form', function(request, response){
    console.log('affwefw');
    response.render('produtos/form');
  });

  app.post('/produtos/salvar', function(request, response){
    var con           = app.infra.connectionDB();
    var produtosBanco = app.infra.produtosBanco(con);
    var produto       = request.body;
    produtosBanco.salvar(produto, function(erro, results){
      response.render('produtos/lista');
    });
  });

};
