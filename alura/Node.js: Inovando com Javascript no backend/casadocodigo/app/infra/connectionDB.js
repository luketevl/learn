var bd  = require('mysql');

var createDBConnection = function(){
  var con ={};
  if(!process.env.NODE_DEV){
    con = bd.createConnection({
                                host:     "localhost",
                                user:     "root",
                                password: "root",
                                database: "casadocodigo_nodejs",
    });
  }
  else if(!process.env.NODE_DEV == 'test'){
    con = bd.createConnection({
                                host:     "localhost",
                                user:     "root",
                                password: "root",
                                database: "casadocodigo_dev_nodejs",
    });
  }
  return con;
}

// WRAPPER
module.exports = function(){
  return createDBConnection;
};
