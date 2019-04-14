app.controller('NotificacaoController',function($scope,$timeout){
	var ctrl = this;
	ctrl.MensagemNotificacao = null;
	ctrl.tmrMensagem= null;

	$scope.$on('novaNotificacao',function(evt,mensagem){
		if (ctrl.tmrMensagem)
				$timeout.cancel(ctrl.tmrMensagem);

		ctrl.MensagemNotificacao = mensagem;
		
		ctrl.tmrMensagem = $timeout(function() { ctrl.MensagemNotificacao = null }, 5000);

	})
});