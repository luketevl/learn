class NegociacaoController{
  constructor(){
    let $     = document.querySelector.bind(document);

    this._quantidade   = $('#quantidade');
    this._vrdata       = $('#data');
    this._valor        = $('#valor');

  }
  add(event){
    event.preventDefault();
    console.log('Add negociacao Controller');
    let negociacao = new Negociacao(new Date(...this._vrdata.value
                                                                  .split('-')
                                                                  .map( (el, index) => el - index % 2)
                                                                 ), this._quantidade.value, this._valor.value);
    console.log(negociacao);

  };


}
