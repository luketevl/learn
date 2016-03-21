* CONTEUDO
  = Comandos node
    = node arquivo.js - Roda o arquivo





  = Funcoes
    = var http = require('http') - Importa MODULOS, ARQUIVOS
    = var servidor = http.createServer(function(req, response){ -  CRIA SERVIDOR, parametro FUNCAO cria requisicao e da resposta.

      });
        = response.end(); - Exibe a resposta.
        = request.url; - Pega a URL
    = servidor.listen(porta, host) - Escuta o servidor
    = var express = require('express') - Importa MODULOS, ARQUIVOS
    = var app = express() - INVOCA O EXPRESS
    = var app = app.set('view engine', nomeEngine) - DEFINIR VARIAVEIS para dentro do express, passa pelo sistema inteiro
    = app.set('views', './app/views'); - TROCA  LUGAR onde o EXPRESS vai buscar as views
    = app.listen(porta, servidorPronto); - Escuta o SERVIDOR
    = app.get(nome, function(request, response){}); - RESPOSTAS E REQUICISOES DO SERVIDOR
        = response.send(); - RESPONDE PARA O CLIENTE
        = response.render(local/arquivo); - RESPONDE PARA O CLIENTE
        = response.render(local/arquivo, variaveis); - RESPONDE PARA O CLIENTE COM VARIAVEIS
    = module.exports = function(){}; - COMMON JS , FUNCAO QUE RETORNA ao dar REQUIRED
    = var con =  mysql.createConnection({host, user, password, databse}); - CRIA CONEXAO com o BANCO DE DADOS
    = con.query('query', function(erro, results){}); - Executa consulta SQL
    = con.end(); - FECHA CONEXAO COM BANCO

  = Bibliotecas
    = http - Criar servidor WEB
    = express - FrameWork
    = mysql - Banco de dados

* OBSERVACOES
  = express - FrameWork para ajudar a tratar requisicoes
  = NPM gerenciador de pacote para javacript
  = npm init - CONFIGURA O PROJETO
  = npm install PACOTE -save / Baixa pacote e SALVA no package.json
  = express REQUIRE retorna uma funcao nao inicializada, deve ser invocada express();
  = app.get - CRIA ROTAAAS
  = (EJS) EMBEDDEDJJS -  Escrever código JS junto com html, PAGINAS DINAMICAS
    = TEM que criar a PASTA VIEWS
  = express eh INTEGRADO com MECANISMOS DE PAGINAS DINAMICAS
  = nodemon - Fica vigiando e sobe de novo a aplicacao
    = npm install -g nodemon / -g GLOBAL
    = nodemon app.js (SOBE SERVIDOR)
  = ORGANIZACAO
    = Usar o MODULE.EXPORTS uma unica vez, assim ele carrega uma vez, codigo de definicao fica fora.
    = Pasta APP app.js SOBE O SERVIDOR
    = CAMINHOS RELATIVOS sao de ONDE o SERVIDOR começou a RODAR
