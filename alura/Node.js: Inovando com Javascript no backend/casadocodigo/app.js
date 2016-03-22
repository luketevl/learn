var server           = require('./config/config')();
server.listen(3000, function(){
  console.log('Server ok');
  console.log('Server TOP');
});
