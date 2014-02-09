


define (['backbone', 'app/app', 'app/model/Usuario'], function (Backbone, app) {

	app.collections.UsuarioCollection = Backbone.Collection.extend({
		url: 'usuarios.json',
		model: app.models.Usuario
	});
	return {
		getUserCollection: function () { return app.collections.UsuarioCollection; }
	};
});
