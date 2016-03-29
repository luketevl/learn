* VIDEOS
  = #1 - Introdução

    = COMPONENTES
      = eventloop - SINGLE THREAD

    = BLIBLIOTECAS
      = libuv - Multiplatforma responsavel pelo I/O ASSINCRONO(event loop e thread pool)


* OBSERVACOES
  = eventloop - SINGLE THREAD
  = NODE.JS process TUDO em ma UNICA THREAD usando o event loop
  = SINGLE THREAD - Um PROCESSO de cada VEZ
  = THREAD POOL - Processamento do i/o (ESCALANDO PROCESSOS)
  = V8 ENGINE de interpretação JAVASCRIPT de alta performance
  = REPL READ EVAL PRINT LOOP - USAR PELO TERMINAL digitando "node"


  = #2 - Sistema de Módulos

    = COMPONENTES


    = BLIBLIOTECAS

    = FUNCOES
      = require() | Retornar o que foi EXPORTADO de um outro módulo
        = USA CACHE ou seja carrega apenas uma unica vez

    = OBJETOS
      =module.exports.  | DEFINE oque do MODULO pode ser usado EXTERNAMENTE, apontam mesmo referencia, PAI
      =exports.         | DEFINE oque do MODULO pode ser usado EXTERNAMENTE, apontam mesmo referencia, CUIDADO se usar PAI VAI SOBREESCREVER
      =this.            | DEFINE oque do MODULO pode ser usado EXTERNAMENTE, apontam mesmo referencia, CUIDADO se usar PAI VAI SOBREESCREVER

* OBSERVACOES
  = Usa o COMMONJS
  = INDEX.js conhecido no node ao usar um modulo
  = TUDO dentro do MODULO é PRIVADO
  = Apenas MODULE.EXPORTS é o PAI de todos
  = required | Busca sempre primeiro um CODE MODULE, OU SEJA CUIDADO NOME DO MODULO
    = se NAO PASSAR caminho relativo ou absoluto ele busca na PASTA NODE_MODULES
    = Se nao INCOVAR o Metodo ele FOGE do CACHE
  = NUNCA COMITAR a pasta NODE_MODULES