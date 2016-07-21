== COMANDOS
  > - **git tag** | _CRIA e EXIBE versoes_ do projeto
    - **git diff v1 v2** | Mostra a _diferença_ entre versoes, arquivos etcs
    - **git blame** | Mostra _alterações linha por linha_ em todas as versões, nome do arquivo se foi alterado, quem alterou, quando alterou
    - **git clone URL** | _Clona_ projeto
    - **git checkout version** | _TROCA de VERSAO_ e comeca a usar
      - **git checkout -b NAMEBRANCH** | _CRIA e TROCA de BRANCH_ e comeca a usar
      - **git checkout -t remoteBranch** | _CRIA_ branch local com base em uma branch remota
    - **git ls-files** | _MOSTRA_ quais _arquivos_ estao sendo _VERSIONADOS_
    - **git status** | _MOSTRA ESTADO ATUAL_ do no git, arquivos nao monitorados, nao adicioandos e a serem enviados
    - **git add** | _ADICIONA_ arquivos _NOVOS / MODIFICADOS_ para o controle do _GIT_ NA _INDEX STAGING AREA_ e poder ser _COMITADO_, _WORKING Directory_ VS _HEAD_
      - **git add -i** | Modo _INTERATIVO_ quais alteracoes feitas no WORKING Directory devem ser _ADCIIONADAS_ AO STAGING AREA
    - **git commit -m "msg"** | _COMITA_ as alterações
      - **git commit -a** | _COMITA TODAS_ as alteracoes criando um novo _HEAD_, Arquivos _NOVOS_ **NAO** sao comitados
    - **git config user.name "name"** | _CRIAR USUARIO_
      - **git config --global user.name "name"** | _CRIAR USUARIO GLOBAL_
    - **git config user.email "email"** | _CRIAR EMAIL_
      - **git config --global user.email "email"** | _CRIAR EMAIL GLOBAL_
    - **git log** | _MOSTRA_ o _LOG_ de _commits_
      - **git log** | _MOSTRA_ o _CONTEUDO_ do _LOG_ de _commits_
    - **git whatchanged** | _MOSTRA_ os arquivos que foram _alterados_ nos _commits_
      - **git whatchanged -p** | _MOSTRA_ o _CONTEUDO_ dos arquivos que foram _alterados_ nos _commits_
    - **git remote** | _MOSTRA_ repositorios _REMOTOS_
      - **git remote add NAME URL** | _ADICIONA_ repositorio _REMOTO_
    - **git push** | _ENVIA_ commits para repositorio _REMOTO_
      - **git push branchLOCAL branchREMOTE** | Determinado repositorio
      - **git push -u branchLOCAL branchREMOTE** | Determinado repositorio dizendo que repositorio _LOCAL_ é o mesmo do _REMOTO_
      - **git push origin :branchREMOTE** | Branch remota design do repositório referente ao origin é deletada.
    - **git clone URL** | Busca repositorio REMOTO
    - **git branch** | _MOSTRA_ as branch do projeto _LOCAL_
      - **git branch nameBRANCH** | _CRIA_ branch
      - **git branch -r** | _MOSTRA_ as branch do projeto _REMOTO_
      - **git branch -a** | _MOSTRA_ as branch do projeto _REMOTO_ e _LOCAL_
      - **git branch -d** | _DELETA_ as branch do projeto _LOCAL_
    - **git pull** | _SINCRONIZA_ com repositorio _REMOTO_
    - **git fetch origin** | Verifia todas as alteracoes que foram feitas no repositorio  _REMOTO_

    - CICLO
      - **git init** | _CRIA_ um  repositorio no _GIT_
      -



== OBSERVAOES
 - Controle de versão
 - Cada usuário tem sua copia
 - Para enviar arquivos é necessário ter os arquivos que estão no servidor e DEPOIS enviar
 - Caracteres
  - **-** Removido
  - **+** Acrescentado
  - **@@**
- AO COMITAR se nao tiver definido um USUARIO vai dar problema, DEFINE SEMPRE O USUARIO
- ESTADOS DE UM DIRETORIO
  - **Working Directory** | Arquivos que temos no nosso repositorio e podemos modifica-los
  - **INDEX ou STAGING AREA** | Visao das _MODIFICACOES_
  - **HEAD** | COMPLETO DO REPOSITORIO usado para referencia com a Working Directory
- É IMPORTANTE trabalhar com BRANCHES
- BRANCH asterisco * no NOME DA BRANCH é a branch usado atualmente
