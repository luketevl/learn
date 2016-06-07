=== Comandos JS PADRAO
  > - Busca elementos com seletor CSS
    ```
    document.querySelector(seletor);
    ```
    - Adciona **evento**
    ```
    addEventListener(event, function(){});
    ```
    - **Cria** _elementos_ na DOM
    ```
    document.createElement(element);
    ```
    - **Cria** _conteudo_ no elemento
    ```
    element.textContent(content);
    ```
    - **Adciona** _elemento_ FILHO
    ```
    element.appendChild(elementChild);
    ```
    - **FOCO** no _elemento_
    ```
    element.focus();
    ```
    - **Busca** _valor_ de um elemento  
    ```
    element.value
    ```
    - **Cancela** ação do _evento_
    ```
    event.preventDefault();
    ```
    - **Congela** objeto, ele não entra nas propriedades do objetos _NÃO_ é **DEEP**
    ```
    Object.freeze(obj);
    ```
    - **Vincula** um _escopo_ no outro
    ```
      let $ = document.querySelector.bind(document);
    ```
    - Ver qual é o **tipo** da variavel
      ```
      typeof(variable);
      ```
    - **Transforma** um array em um **NOVO** array, executando uma funcao _ANTES_
      ```
      let numbers = numbers.map(function(el, index){
        return el;
       });
      ```

=== Comandos JS ECMA6
  > - Iteração em elementos de forma **funcional**
  ```
  var.forEach(function(param){
  return param;
  });
  ```
    - _spread operator_ Usado para passar cada posicao de um array como parametro de uma função, usar o 3 pontos **...**
    ```
    function myFunction(x, y, z) { }
    var args = [0, 1, 2];
    myFunction.apply(null, args);
    ```
  > - **ARROW FUNCTIONS =>** Nova forma de declarar funcoes
      - Quando há _apenas_ **UMA** instrucao ele faz o **RETURN** _automatico_
    ```
    let variable = variable.map( (item) => item);
    ```

  > - Criar **CLASSE**
      - Estrutura padrão
      ```
      Class NameClass{}
      ```
      - Criar os **PROPRIEDADES** da CLASSE deve usar o metodo _constructor_
        - Apenas sera _invocada_ caso a classe seja chamada com **new**, vinculando o _this_ ao objeto criado.
          ```
          constructor(params){ this.variable = value }
          ```
      - Criar **metodos** na CLASSE
      ```
      methodName(){}
      ```
      - Criar **GETTERS**
      ```
      get name (){return value;}
      // Chamada
        instance.name; // Não há necessidade de ()
      ```

  > - **Declarações** de variaveis
      - **let** , tem escopo de **BLOCO** esse modo **NÃO** permite _declarar_ a variavel novamente no mesmo _BLOCO_
      ```
      let variable;
      // Example
      for(let i = 0 ; i < 100 ; i++){
        console.log(i); // Have a value
      }
      console.log(i); // Undefined
      ```


=== Observações
  > - Ao importar o JAVASCRIPT colocar no final do BODY, pois assim a pagina toda carrega antes e os elementos vao existir ja
    - Cuidado com **IMUTABILIDADE**
    - Colocar _ antes do nome da variaveis apenas para convenção que ele _private_
