== COMANDOS
  >
    - **npm install grunt --save-dev** || _Instala_ o GRUNT
    - **npm install grunt-cli -g** || _Instala_ o _CLIENTE_ GRUNT, modo global para usar em QUALQUER LOCAL do computador
    - **grunt nameTask** || _CHAMA_ a tarefa
      - **grunt nameTask::subTask** || _CHAMA_ a _SUB_ tarefa, _TARGET_




== METODOS
  >
    - **grunt.initConfig({});** || _Configuração_ dos plugins
    - **grunt.loadNpmTasks('PluginName');** || _Carregamento_ dos PLUGINS
    - **grunt.registerTask('nameTask', [tasks])** || _Lista_ de tarefas que serao executadas em _ORDEM_




== PLUGINS
  >
    - **grunt-contrib-copy** || _COPIA_ arquivos
    - **grunt-contrib-clean** || _LIMPA_ arquivos
    - **grunt-contrib-concat** || _CONCATENA_ arquivos
    - **grunt-contrib-uglify** || _MINIFICACAO_ do _JS_
    - **grunt-contrib-cssmin** || _MINIFICACAO_ do _CSS_
    - **grunt-usemin** || _AJUDA CONFIGURACAO_ dos plugins do _grunt-contrib-cssmin_, _grunt-contrib-uglify_, _grunt-contrib-concat_
      - <!--build:css css/index.min.css --> <!-- endbuild --> || _Configuracao_ do _CSS_
      - <!--build:js js/index.min.js --> <!-- endbuild --> || _Configuracao_ do _JS_
    - **grunt-contrib-imagemin** || _OTIMIZACAO_ do _IMAGENS_
    - **grunt-rev** || _VERSIONAMENTO_ de arquivos colocando _PREFIXO_ no nome do arquivos
    - **grunt-contrib-less** || _PREPROCESSADOR_ de _CSS_
    - **grunt-contrib-watch** || _VIGIA_ de _ALTERACAO_ em arquivos
    - **grunt-contrib-jshint** || _VERIFICA_ se o codigo esta _correto_ e da dicas de _melhorrias_
    - **grunt-browser-sync** || _RELOAD_ da _página_ quando um arquivo é _alterado_



== OBSERVACOES
  - Roda no NODEJS
  - **OBRIGATORIO** usar o arquivo de _configuracao_ **GruntFile.js**
  - :TARGET || Chama a target
  - **cwd** || Diretorio corrente
  - **src** || Arquivos a serem corpiados
    - __****__ || GLOGAL PATTERN
    - __{ITEM, ITEM2}__ || Usar para formatos
  - **dest** || Destino
  - **ORDEM** é importante de execução
  - a: { b: {}} || _TASK_ **a** , _TARGET_ **b**
  - **GRUNT-USEMIN** é muito BOM ele substitui comentarios dos recursos e muda
    - A task **useminPrepare** processa cada página procurando por comentários especiais que envolvem arquivos CSS e JavaScript.
    - A task **usemin** é chamada depois dos três plugins terem sido executados com as configurações passadas pelo useminPrepare a task alterará o HTML fazendo com que ele aponte para os arquivos concatenados e minificados.
  - RODAR **REV**  _ANTES_ do **usemin**
  - **WATCH** _trava_ o terminal e é interessante usar apenas para add e edit
  - **JSHINT** coloca ele no watch e boa
  - **grunt-browser-sync** gera um _script_ e DEVEMOS _HABILITAR_ o **servidor**, é bom colocar o **watch : true**
