= O que fazer?

  - Client
    - Minificar arquivos
    - Melhorar imagens do site
      - Usar imagens já do tamanho correto, tamanho necessário a mais.
      - Remover METADADOS http://kraken.io http://tynpng.com
        - **lossless** | Não perde qualidade das imagens
        - **lossy** | Reescreve o arquivo perde qualidade porém fica menor


  - Server
    - Habilitar compress (gzip)



= Comandos / Ferramentas
  - UglifyJS
    - npm install uglifyjs -g
      - uglifyjs file.js -o outout.js
  - Automação de tarefa GULP
    - gulp copy | copia arquivos




= Obsvervações

  - Tamanho arquivo pesa o site
  - Servidor HTTP com **nginx**
    - nginx -s reload | recarrega arquivo de configuracao
    - gzip on; / Bom para arquivos de texto
    - Só comprime HTML por padrao, tem que mudar com o comando
      - gzip_types application/javascript
  - Servidor HTTP Google App Engine SDK for PHP
  - HTTP ARCHIVE | Site mostra performance de varios sites
  - SVG é vetorial, redimencionar apenas que sao bitmap
  - Remover METADADOS das fotos usando http://kraken.io http://tynpng.com
