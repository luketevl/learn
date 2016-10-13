HTML 5
== Anotações
- @variavel | Criar variavel
  - #{variavel}| Concatena a variavel
- .nome{} | Cria mixin
  - .nome; | CHAMA O MIXIN
- .nome(@param){} | Cria mixin com PARAMETRO
-  .nome(@param: valorPadrao){} | Cria mixin com PARAMETRO
  - .nome(param); | CHAMA O MIXIN
- // | Comentatio no LESS ele nao vai quando eh compilado
- elemento { elemento_filho{}} | Usado para alinhamento elementos filhos
- elemento { elemento_filho{ &:hover}} | Usado para alinhamento elementos filhos, & USADO para buscar elemento que é PAI
- @import | Import um recurso, passar sem extensão, tudo em um arquivo só
- Funcções de cores
  - fade(cor, opacidade%) | dar opacidade
  - darken(cor, quantoMaisEscuro%) | Usado para escurecer uma cor
  - lighten(cor, quantoMaisClara%) | Usado para clarear uma cor
  - complement() |
  - sature()  |
  - adjust-hue() |
-  &:extend(.nome) | ISOLA O CSS Cria placeholder e cria em uma unica linha com elmentos com propriedades iguais
- round() | Arredonda valor


== Comandos
- npm install less -g | INSTALA SASS
- lessc --version | Ve a versao
- lessc arquivo novoArquivo | Compila o arquivo
- sass --watch arquivo:novoArquivo | Compila o arquivo e fica observando se vai ter alteracao se tiver compila a alteracao


== Observações
- Utilizar NODE par instalar o less
- LESS é um PRE PROCESSADOR
- Arquivo tem que ter formato .less
- Variavel no RGBA ja converte automatico
- MIXIN usado para criar codigos que se repetem MUITO
  - usar EXTEND quando nao precisa passar parametro
- nesting ou alinhamento colocar elemento dentro
- PLACEHOLDER NAO tem valor padrão.
- ACEITA OPERACOES MATEMATICAS
- **~** colocar para definir viariavel com **string**
