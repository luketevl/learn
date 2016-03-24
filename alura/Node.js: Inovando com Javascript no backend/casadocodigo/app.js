var server           = require('./config/config')();
var http            = require('http').Server(server);
var io              = require('socket.io')(http);

server.set('io', io);

http.listen(3000, function(){
  console.log('Server ONLINE');
});
