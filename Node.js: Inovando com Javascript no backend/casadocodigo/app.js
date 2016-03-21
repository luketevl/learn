var app           = require('./config/config')();
var rotasProdutos = require('./app/routes/produtosRoutes')(app);
app.listen(3000, function(){
  console.log('Server ok');
  console.log('Server TOP');
});
