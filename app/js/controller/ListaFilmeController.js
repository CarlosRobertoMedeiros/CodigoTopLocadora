app.controller('ListaFilmeController',function($rootScope, BuscaFilmeAPI){
			var ctrl = this;
			ctrl.titulo = "Encontre seu filme";
			ctrl.TextoBusca = null;

			
			ctrl.Buscar = function(){
				BuscaFilmeAPI.BuscarFilme(ctrl.textoBusca).then(function(oLista){
					ctrl.lista =oLista;
				})
			}

			ctrl.AbrirDetalheFilme= function(filme){
				$rootScope.$broadcast('AbrirFilme',filme);				
			}
		
		});