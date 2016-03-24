* CONTEUDO
  = AngularJS é uma framework MVC

* COMANDOS
  = npm install | Instala a dependencia do seu projeto
  = npm start   | Sobe sua aplicação

* PASSOS
  = criar arquivo da aplicacao
    = main.js

* METODOS
  = angular. | CORE DO ANGULAR
    = .module(nome, [dependencias]);  | CRIA MODULO
    = .module(nome);                  | BUSCA MODULO
  = angular.module(nomeAPP)
    = .controller(NomeController, function($scope){});      | CRIANDO UM CONTROLLER
    = .service(NomeService, function($scope){this.funcao}); | CRIANDO UM SERVICE de forma Construtora
    = .factory(NomeService, function($scope){});            | CRIANDO UM SERVICE de forma FABRICA

* DIRECTIVES
  = ng-app          | Vincula a aplicação e carrega o MODULO
  = ng-controller   | Seta um CONTROLLER para uma parte do DOM
  = ng-repeat       | Usado para LOOP
    = ng-repeat="item in itens"

* SERVIÇOS
  = $http           | REQUISICOES HTTP
    = .get().then(callbacksucesso, callbackerror);

* ANGULAR EXPRESSION
  = INTERPOLAÇÃO | PEGAR VALORES DO ANGULAR
    = {{nome}}

* CICLO DE VIDA
  = TWO WAY DATA BINDING
		= Quando compilado, fica ESCUTANDO os ng-model e avisa as DIRETIVAS

* OBSERVAÇÕES
  = Sempre que criar um .JS importar esse arquivo
  = Nomeclaturas
    = controller é PrimeiroMaiusculo
  = IMPORTANTE
    = Passar o $scope
    = no http funcao do results tem propriedade .data que tem o retorno que queremos
