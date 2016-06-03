=== Comandos
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

    - Iteração em elementos de forma **funcional**
    ```
    var.forEach(function(param){
    return param;
    });
    ```




=== Observações
  > - Ao importar o JAVASCRIPT colocar no final do BODY, pois assim a pagina toda carrega antes e os elementos vao existir ja
