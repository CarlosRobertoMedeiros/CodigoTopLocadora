app.controller('CarrinhoController',function(CarrinhoCompraService){
	var ctrl = this;
	ctrl.titulo = "Carrinho de Compras";

	ctrl.removerFilme = function(oFilme){
		CarrinhoCompraService.removerFilme(oFilme.titulo);
	}

	ctrl.exibeLista = function(){
		return CarrinhoCompraService.listaFilmes;
	}
	

});