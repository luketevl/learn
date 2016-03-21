* CONTEUDO
  = Cliente
  = Servidor
  = Regras
  = Protocolos
    = HTTP (Define REGRAS de comunicação para TRAFEGAR dados na rede)
      = Centraliza trabalho no SERVIDOR, pode gerar GARGALO
      = Garante conectividade
      = Envia DADOS em texto PURO
      = STATELESS
      = action
      = method (GET, POST, DELETE, PUT, OPTIONS)
    = HTTPS (Modo SEGURO do HTTP)
      = Envia DADOS criptografados
    = Bittorrent
      = P2P Pear to Pear (Cliente e SERVIDOR ao mesmo tempo)


* OBSERVAÇÕES
  = WEB = Cliente + Regras + Servidor
  = Navegador conhecem as empresas certificadoras
  = HTTPS possui certificado digital
  = Ceritificado possui validade, confirma integridade, possui chave PUBLICA para criptografia
  = HTTPS usa chaves ASSIMETRICAS (Publica e Privada)
  = Então HTTPs começa com criptografia assimétrica para depois mudar para criptografia simétrica.
  = URL (PROTOCOLO://dominio:porta/recursos)
  = nslookup - descobre o IP da URL
  = REQUISIÇÃO - Cliente pedindo algo para o SERVIDOR, sao INDEPENDENTES
  = Resposta - Servidor responde a uma REQUISICAO
  = STATELESS - NAAAAO sabe das requisições anteriores
  = POST envia no CORPO da MSG
  = CURL TERMINAL -V mostra tudo
