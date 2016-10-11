class NegociacaoDAO{
  constructor(connection){
    this._connection = connection;
    this._store = 'negociacoes';
  }

  add(negociacao) {
    return new Promise((resolve, reject) => {
      const request = this._connection.transaction([this._store], 'readwrite')
        .objectStore(this._store)
        .add(negociacao);
          request.onsuccess = e => {
            console.log('negociacao add');
            resolve();
          };
          request.onerror = e => {
            console.log('negociacao fake ', e.target.error);
            reject(e.target.error);
          };
    });
  }


  list() {
    return new Promise((resolve, reject) => {
      const cursor = this._connection.transaction([this._store], 'readwrite')
        .objectStore(this._store)
        .openCursor();
        let negociacoes = [];
        cursor.onsuccess = function(e){
          if(e.target.result){
            const dado = e.target.result.value;
            negociacoes.push(new Negociacao(dado._data, dado._quantidade, dado._valor));
            e.target.result.continue();
          }
          else{
            console.log('negociacao add', negociacoes);
            resolve(negociacoes);
          }
        };
        cursor.onerror = function(e){
          console.log('negociacao error ', e.target.error);
          reject(e.target.error);
        };
    });
  }

  delete() {
    return new Promise((resolve, reject) => {
      const request = this._connection.transaction([this._store], 'readwrite')
        .objectStore(this._store)
        .clear();
        request.onsuccess = e => {
          console.log('negociacao deleted');
          resolve(true);
        };
        request.onerror = e => {
          console.log('negociacao deleted fail ', e.target.error);
          reject(e.target.error);
        };
    });
  }
}
