app.service('BuscaFilmeAPI',function($http, $q){
			var servico = this;

			servico.BuscarFilme = function(nomeFilme){
				var resultado = $q.defer();
				var urlAPI = 'http://essearch.allocine.net/br/autocomplete?q=';

				$http({
						url:urlAPI+nomeFilme
				}).then(function(response){
					var  listaResultado = [];

					
					listaResultado = response.data.map(function(ofilmeAPI){
						return {
							titulo: (ofilmeAPI.title1) ? ofilmeAPI.title1 : ofilmeAPI.title2,
							urlCapa:ofilmeAPI.thumbnail,
							infoAdicional:ofilmeAPI.metadata.map(function(oMetadataAPI){
								return {
									legenda : oMetadataAPI.property,
									descricao:oMetadataAPI.value
								}
							})

						};	

					});
					resultado.resolve(listaResultado);


				},function(){
					resultado.reject();

				})

				return resultado.promise;

			}

		});