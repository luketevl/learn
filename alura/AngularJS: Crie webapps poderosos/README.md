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
    = .factory(NomeService, function($scope){return});            | CRIANDO UM SERVICE de forma FABRICA
    = .config(function(){}); | CRIA configuracoes
    = .directive(nomeDiretiva, function(){return});
      = restrict: - restringir modo de utilizacao => A -> Atributo, E -> Elemento, C-> CLASSE, M -> Comentário | Pode combinar atributos
      = template 'inserir html'
			= templateUrl 'inserir arquivo html'
			= replace 'remove o elemento da directive'
			= restrict 'restringir modo de utilizacao' A -> Atributo, E -> Elemento, C-> CLASSE, M -> Comentário | Pode combinar atributos
			= scope {} 'cria um scopo isolado para a directive'
				= Passar parametros
					= @ 'PREFIXAR direto'
					= = 'PREFIXAR com data binding'
			= transclude 'Encapsular conteudo', ERDA TODAS AS PROPRIEDADES mesmo sendo outro escopo
				= inserir ng-transclude 'Definir onde vai aparecer'
			= require: "ngModel" - 'Acessa API'
				= ^uiAccordions , 'Prefixando, pegando elemento pai'
			= link: function(scope, element, attrs, require, controller){} 'Executada DEPOIS do te pleate compilado, USADA para interarir com a DOM'
			= controller: = 'Definir uma API, compartilhar com outroas directives'
				= é uma função construtora, acessando pelo this
    = $routeProvider.when(url,{  - 'Para ONDE VOU'
  			templateUrl: 'view/contatos.html',
  			controller: 'nomeController',
  			resolve:{ - 'Resolver DEPENDENCIAS, CONDICAO DE ENTRADAS, só entra se promessas forem TRUE'
    				}
    			});
		= $routeProvider.otherwise({redirectTo: '/rotaPadrao'});  - 'DEFINE COMPORTAMENTO QUANDO NAO ACHA A ROTA'
    = $locationProvider.html5Mode(true); || ATIVA MODULO HTML 5 NAS ROTAS
      = <base href="/"> | Tem que colocar a base

* DIRECTIVES
  = ng-app          | Vincula a aplicação e carrega o MODULO
  = ng-controller   | Seta um CONTROLLER para uma parte do DOM
  = ng-repeat       | Usado para LOOP
    = ng-repeat="item in itens"
    = ng-repeat="item in itens | filter: campo"
    = ng-repeat="item in itens | filter: campo: true" | SO retorna se for EXATAMENTE IGUAL
      = ng-leave-active | Cria essa classe, quando esta deixando
  = ng-model        | Manda da VIEW para o CONTROLLER
  = ng-model-options | Seta algumas opções para o NG-model
    = ng-model-options="{debounce: 6000}" | Só vai para o ng-model depois de um TEMPO
  = ng-bind | LE o valor da model
  = ng-view | Inserir uma pagina dentro, Template da ROTA acessada
  = ng-include | Incluir arquivo. IMPORTANTE colocar com aspas simples
    = ng-include = "'arquivo'"

* MODULOS
  = [ngAnimate] | MODULO DE ANIMACAO
  = [ngRoute]   | MODULO DE ROTAS

* SERVIÇOS
  = $http           | REQUISICOES HTTP
    = .get().then(callbacksucesso, callbackerror);

* FILTROS
  = filter: filtro | Filtra de acordo com uma string
  = filter: filtro: TRUE | Filtra de acordo com uma string e se for completa

* ANGULAR EXPRESSION
  = INTERPOLAÇÃO | PEGAR VALORES DO ANGULAR
    = {{nome}}
  = ng-bind="campo" | LE O VALOR

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
