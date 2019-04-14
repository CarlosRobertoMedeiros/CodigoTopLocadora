app.controller('NotificacaoListaController',function(NotificacaoService){
	var ctrl = this;
	ctrl.titulo = "Notificações";

	ctrl.exibeLista = function(){
		return NotificacaoService.lista;
	}
	

});