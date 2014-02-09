

define (['jquery', 'backbone', 'app/app', 
			'app/view/TopBar', 
			'app/view/MainView', 
			'app/view/PopUpWindow', 
			'app/view/seguridad/LoginView',
			'app/view/seguridad/UsuarioView'], function ($, Backbone, app, TopBar) {
	var Workspace = Backbone.Router.extend({
		initialize: function () {
			var body = $('body');
			body.empty();
			app.rendered.topBar = new app.views.TopBar();
			app.rendered.mainView = new app.views.MainView();
			app.rendered.topBar.render().$el.appendTo(body);
			app.rendered.mainView.render().$el.appendTo(body);
			/*
			app.popup({
				css: {
					width: '500px',
					height: '250px'
				},
				view: new app.views.LoginView({ router: this })
			});
			*/
		},
		routes: {
			'home': 'home',
			'login': 'login'
		},
		home: function () {
			app.rendered.topBar.render().$el.appendTo('body');
			var usuarioList = new app.views.UsuarioView({ router: this });
			app.rendered.mainView.setContentView(usuarioList);
		},
		login: function () {
			var login = new app.views.LoginView({ router: this });
			app.rendered.mainView.setContentView(login);
			app.rendered.topBar.$el.remove();
		}
	});

	var init = function () {
		var r = new Workspace();
		Backbone.history.start();
	};
	return {
		router: Workspace
	};
});