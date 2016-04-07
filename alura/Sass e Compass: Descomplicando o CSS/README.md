HTML 5
* Anotações
  = $variavel | Cria variavel
  = @mixin nome{} | Cria mixin
    = @mixin nome(param){} | Cria mixin com PARAMETRO
    =  @mixin nome(param: valorPadrao){} | Cria mixin com PARAMETRO
      = @include nome; | CHAMA O MIXIN
      = @include nome(param); | CHAMA O MIXIN
  = // | Comentatio no SCSS ele nao vai quando eh compilado
  = elemento { elemento_filho{}} | Usado para alinhamento elementos filhos
  = elemento { elemento_filho{ &:hover}} | Usado para alinhamento elementos filhos, & USADO para buscar elemento que é PAI
  = @import | Import um recurso, passar sem extensão
  = Funcções de cores
    = darken(cor, quantoMaisEscuro%) | Usado para escurecer uma cor
    = lighten(cor, quantoMaisClara%) | Usado para clarear uma cor
    = complement() |
    = sature()  |
    = adjust-hue() |
    =  %placeholder %nome(param: valorPadrao){} | ISOLA O CSS Cria placeholder e cria em uma unica linha com elmentos com propriedades iguais
      = @extend nome; | CHAMA O PLACEHOLDER

* Comandos
  = gem install sass | INSTALA SASS
  = gem install compass | INSTALA O COMPASS
  = sass -v | Ve a versao
  = compass -v | Ve a versao
  = sass arquivo:novoArquivo | Compila o arquivo
  = sass -- watch arquivo:novoArquivo | Compila o arquivo e fica observando se vai ter alteracao se tiver compila a alteracao

* Observações
  = Utilizar RUBY par instalar o sass
  = SASS é um PRE PROCESSADOR
  = Arquivo tem que ter formato .scss
  = Variavel no RGBA ja converte automatico
  = MIXIN usado para criar codigos que se repetem MUITO
  = nesting ou alinhamentoooo colcoar elemento dentro
  = PLACEHLDER NAO tem valor padrão.
