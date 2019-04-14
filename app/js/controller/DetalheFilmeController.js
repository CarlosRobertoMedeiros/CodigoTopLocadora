app.controller('DetalheFilmeController', function($rootScope,CarrinhoCompraService){
			var ctrl = this;
			
			$rootScope.$on('AbrirFilme', function(evt,filme){
				ctrl.exibeDetalheFilme(filme);
			})	

			ctrl.exibeDetalheFilme = function(filme){
				$rootScope.layout = {
					exibeListaFilme:false,
					exibeDetalheFilme:true	
				}

				ctrl.filmeSelecionado = filme;
			}

			ctrl.voltarParaLista = function(){
				$rootScope.layout = {
					exibeListaFilme:true,
					exibeDetalheFilme:false	
				}
			}

			ctrl.adicionarFilmeNoCarrinho = function(){
				CarrinhoCompraService.adicionarFilme(ctrl.filmeSelecionado);
			}
		

		});