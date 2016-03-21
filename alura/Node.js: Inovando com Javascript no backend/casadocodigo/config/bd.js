var bd  = require('mysql');
var con = bd.createConnection({
            host:     "localhost",
            user:     "root",
            password: "root",
            database: "casadocodigo_nodejs",
});
module.exports = function(){
  return con;
};
