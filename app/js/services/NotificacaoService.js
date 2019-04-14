app.service('NotificacaoService', function($rootScope){
			var servico = this;
			servico.lista=[];

			servico.adicionar = function(Mensagem){
				servico.lista.unshift(Mensagem);

				$rootScope.$broadcast('novaNotificacao',Mensagem);
			}


});