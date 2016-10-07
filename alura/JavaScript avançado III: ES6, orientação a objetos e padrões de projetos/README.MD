
## CLASSE
- Criar metodo **estático**
```
static method(){}
```

## Comandos JS PADRAO

## Banco de dados
- Navegadores possuem um **banco de dados OFFLINE**, chamado **indexeddb**
- Ver o banco de dados do Navegador , mostra idbfactory
```
window.indexedDB
```
- **Cria** uma **requisição** com o _banco de dados_
```
const openRequest = window.indexedDB.open('databaseName', numberVersion);
```
### Eventos banco de dados
- **Cria** ou **altera** um banco existente
```
openRequest.onupgradeneeded = e => {};
```
- Disparado quando da **sucesso** na _conexão_
```
openRequest.onsuccess; = e => {};
```
- Disparado quando da **erro** na _conexão_
```
openRequest.onerror = e => {};
```
- Disparado quando da **abort** na _conexão_
```
request.onabort = e => {};
```
- **Pega** qual é o **erro**
```
openRequest.onerror = e => {
  e.target.error;
};
```
- **Pega** a **connection**
```
openRequest.onsuccess = e => {
  e.target.result;
};
```
### Object Stories
- Seriam as **tabelas** do _banco de dados_
- **Cria** uma **object store**
  - Segundo paramaetro é um objeto e podemos falar que a _object store_ é **autoIncrement**
```
connection.createObjectStore('tableName', {autoIncrement: true});
```
- **Deleta** uma **object store**
```
connection.deleteObjectStore('tableName');
```
- **Obtem** todas as **object store**
```
connection.objectStoreNames;
```
- **Busca** uma **transaction** da _object store_
  - Primeiro parametro _array_ com o _nome_ da _object store_
  - Segundo parametro o _tipo_: **readwrite**, **readonly**
```
const transaction = connection.transaction(['objectStoreName'], type);
```
- **Realiza Rollback** ele chama o evento onerror
```
// #### VAI CANCELAR A TRANSAÇÃO. O evento onerror será chamado.
transaction.abort();
```
- **Obtem** a _object store_
```
const store = transaction.objectStore('objectStoreName');
```
- **Adiciona** em uma _object store_
```
const request = store.add(object);
```
- **Lista** uma _object store_, com **cursor** _ponteiro_
```
const cursor = store.openCursor();
cursor.onsuccess = (e) => {
  e.target.result.continue(); // vai para o próximo ponteiro
}
```
- **Remove** em uma _object store_
```
const request = store.clear();
```

## Comandos JS ECMA6
- Criar **modulos**
```
```

## Observações
- **indexedDB**
  - É **auto commited** no _onsuccess_
  - Crie todos os eventos depois execute o código, **PORQUE** ele _chama_ o **onupgradeneeded** APENAS **uma vez**
  - Eventos: Busca qual é o erro
```
e.target.error
```
  - **Object Stories** _NÃO_ possui **schema**, _restrições_
  - Para **obter** uma _object store_ é necessário _criar_ uma **transaction**
  - Para **adicionar** em uma _object store_ é necessário _criar_ uma **store**
  - _Metodo_ **add, openCursor** retorna uma **requisição**
  - É **ASSINCRONO**
  - **openCursor** ele retorna _vazio_ quando _não_ há dados
  - **openCursor** para _pegar_ os **valores** usar **.target**
  - Bibliotecas que lidam com o **indexedDB** _Dexie_ e o _Db.js_
- **Monk path** _modifica_ um metodo API na marra ! Usar em **ULTIMO** caso
- Cuidado com o **escopo lexico** das **arrow functions**
- **TIPOS LITERAIS** não comparam _posição da memória_
