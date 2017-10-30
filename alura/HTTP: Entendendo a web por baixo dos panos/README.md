# LINKS 
- https://tools.ietf.org/html/rfc2616
- https://httpstatusdogs.com/


# CONTEUDO
- Cliente
- Servidor
- Regras
- Protocolos
  - HTTP (Define REGRAS de comunicação para TRAFEGAR dados na rede)
    - Centraliza trabalho no SERVIDOR, pode gerar GARGALO
    - Garante conectividade
    - Envia DADOS em texto PURO
    - STATELESS
    - action
    - method (GET, POST, DELETE, PUT, OPTIONS)
    - HTTPS (Modo SEGURO do HTTP)
      - Envia DADOS criptografados
  - HTTP2
    - Trafega dados(body) com gzip 
    - Request e Response em binário + hpack
    - Criptografado TLS
    - HEADERS STATEFUL
    - Server Push
      - Ja retorna o que eh necessario sem o browser pedir
    - Multiplexing
      - Varias requisicoes ao mesmo tempo
  - Bittorrent
    - P2P Pear to Pear (Cliente e SERVIDOR ao mesmo tempo)



# OBSERVAÇÕES
- WEB = Cliente + Regras + Servidor
- Navegador conhecem as empresas certificadoras
- HTTPS possui certificado digital
- Ceritificado possui validade, confirma integridade, possui chave PUBLICA para criptografia
- HTTPS usa chaves ASSIMETRICAS (Publica e Privada)
  - São **lentas**
  - Mais seguras
- Chave simetrica
  - **Não** tão **seguras**
  - Uma **unica** chave.
- Então HTTPs começa com criptografia assimétrica para depois mudar para criptografia simétrica.
- URL (PROTOCOLO://dominio:porta/recursos)
- nslookup - descobre o IP da URL
- REQUISIÇÃO - Cliente pedindo algo para o SERVIDOR, sao INDEPENDENTES
- Resposta - Servidor responde a uma REQUISICAO
- STATELESS - **NAAAAO** sabe das requisições anteriores
- POST envia no CORPO da MSG
- CURL TERMINAL -V mostra tudo
- HTTP2
  - Envia HEADER apenas na primeira requisicao, depois ele nao envia mais, envia apenas o que for diferente

- HTTP
  - KeepAlive
    - Entre 4 e 8 conexoes
