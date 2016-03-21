var con = require('../../config/bd')();
module.exports = function(app){
  app.get('/produtos', function(request, response){
    con.query("SELECT * FROM livros", function(erro, results){
      response.render('produtos/lista', {lista: results});
    });
    con.end();
  });
};
