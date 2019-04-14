app.service('CarrinhoCompraService', function(NotificacaoService){
			var servico = this;
			servico.listaFilmes=[];

			servico.FilmeExistente = function(tituloFilme){
				return servico.listaFilmes.filter(function(oFilme){
											return oFilme.titulo == tituloFilme;
												})
			}

			servico.adicionarFilme = function(ofilme){
				var vFilmeExistente = servico.FilmeExistente(ofilme.titulo);
				if (vFilmeExistente.length>0){
					vFilmeExistente[0].quantidade++;
					NotificacaoService.adicionar('Foi adicionado o filme '+ofilme.titulo +' - Total: '+vFilmeExistente[0].quantidade);
				}
				else{
					servico.listaFilmes.push({
						quantidade:1,
						titulo:ofilme.titulo,
						urlCapa:ofilme.urlCapa,
						precoUnitario:10
					})
					NotificacaoService.adicionar('Novo Filme Adicionado '+ofilme.titulo +' - Total: 1');						
				}
			
			}

			servico.removerFilme = function(tituloFilme){
					servico.listaFilmes = servico.listaFilmes.filter(function(oFilme){
											return oFilme.titulo != tituloFilme;
					});
					NotificacaoService.adicionar('O filme ' +tituloFilme+' foi removido - Total: 0');

			}

			servico.exibeQuantidadeTotal = function(){
				var quantidadeTotal =0;
				servico.listaFilmes.forEach(function(filme){
					quantidadeTotal +=filme.quantidade;
				}) 
				return quantidadeTotal;
			}
		});