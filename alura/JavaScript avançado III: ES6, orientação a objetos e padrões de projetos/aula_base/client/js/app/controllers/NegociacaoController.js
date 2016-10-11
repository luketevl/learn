class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputData       = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor      = $('#valor');
        this._ordemAtual      = '';

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'esvazia' , 'ordena', 'inverteOrdem');

        this._mensagem = new Bind(
            new Mensagem(), new MensagemView($('#mensagemView')),
            'texto');
        this._init();
}

    _init(){

            ConnectionFactory.getConnection()
              .then(connection => new NegociacaoDAO(connection))
              .then(dao => dao.list())
              .then(negociacoes => negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao)))
              .catch(error => {
                console.log(error);
                this._mensagem.texto = error;
              });
            setInterval(() => {
              this.importaNegociacoes();
            }, 30000);

    }
    adiciona(event) {
      event.preventDefault();
      const negociacao = this._criaNegociacao();
      new NegociacaoService()
        .cadastrar(negociacao)
        .then(msg => {
          this._listaNegociacoes.adiciona(negociacao);
          this._mensagem.texto = msg;
          this._limpaFormulario();
        }).catch(error => this._mensagem.texto = error);

    }

    importaNegociacoes() {


        let service = new NegociacaoService();
        service
            .obterNegociacoes()
            .then(negociacoes => negociacoes.filter(negociacao =>
              !this._listaNegociacoes.negociacoes.some(existente =>
                JSON.stringify(negociacao) == JSON.stringify(existente))))
            .then(negociacoes => negociacoes.forEach(negociacao => {
                this._listaNegociacoes.adiciona(negociacao);
                this._mensagem.texto = 'Negociações do período importadas'
            }))
            .catch(erro => this._mensagem.texto = erro);
    }

    apaga() {
      ConnectionFactory.getConnection().then(connection => {
        new NegociacaoDAO(connection).delete().then(() =>{
          this._mensagem.texto = 'Negociações apagadas com sucesso';
          this._listaNegociacoes.esvazia();
        }).catch(error => this._mensagem.texto = error);
      })
    }

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value));
    }

    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }

    ordena(coluna) {

        if(this._ordemAtual == coluna) {
            this._listaNegociacoes.inverteOrdem();
        } else {
            this._listaNegociacoes.ordena((p, s) => p[coluna] - s[coluna]);
        }
        this._ordemAtual = coluna;
    }
}
