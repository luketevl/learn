class NegociacaoController{
  constructor(){
    let $     = document.querySelector.bind(document);
    this._quantidade        = $('#quantidade');
    this._vrdata            = $('#data');
    this._valor             = $('#valor');
    this._listaNegociacoes  = new ListaNegociacoes();
    this._negociacaoView    = new NegociacaoView($('#negociacaoView'));

    this._negociacaoView.update();
  }
  add(event){
    event.preventDefault();
    console.log('Add negociacao Controller');

    let negociacao = new Negociacao(DateHelper.textToDate(this._vrdata.value), this._quantidade.value, this._valor.value);
    this._listaNegociacoes.add(negociacao);
    console.log(this._listaNegociacoes.listaNegociacoes);
    this._clearForm();
  };

  _clearForm(){
    this._vrdata.value      = '';
    this._quantidade.value  = 1;
    this._valor.value       = 2;
    this._vrdata.focus();
  }
}
