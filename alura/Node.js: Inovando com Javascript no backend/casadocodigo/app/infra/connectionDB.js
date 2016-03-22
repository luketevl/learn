var bd  = require('mysql');

var createDBConnection = function(){
  var con = bd.createConnection({
              host:     "localhost",
              user:     "root",
              password: "root",
              database: "casadocodigo_nodejs",
  });
  return con;
}

// WRAPPER
module.exports = function(){
  return createDBConnection;
};
