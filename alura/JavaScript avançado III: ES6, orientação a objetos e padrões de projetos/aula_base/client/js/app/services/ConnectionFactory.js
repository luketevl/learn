const stores = ['negociacoes'];
const version = 4;
const dbName = 'aluraframe';
var connection = null;

class ConnectionFactory {

  constructor(){
    throw new Error('nao pode instancia');
  }

  static getConnection(){
      return new Promise((resolve, reject) => {
          const openRequest = window.indexedDB.open(dbName, version);
          openRequest.onupgradeneeded = function(e){
            console.log("Cria ou altera um banco já existente");
            ConnectionFactory._createStore(e.target.result);

          };
          openRequest.onsuccess = function(e){
            console.log('Conexão feita');
            resolve(e.target.result);
            if(connection){
              connection = e.target.result;
            }
            resolve(connection)
          };
          openRequest.onerror = function(e){
            console.log('Erro na conexão: ', e.target.error);
            reject(e.target.error);
          };

      });
  }

  static _createStore(connection){
    stores.forEach(item => {
      if(connection.objectStoreNames.contains(item)){
        connection.deleteObjectStore(item);
      }
      else{
        connection.createObjectStore(item, {autoIncrement: true});
      }
    });
  }
}
