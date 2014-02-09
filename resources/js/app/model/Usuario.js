


define (['backbone', 'app/app'], function (Backbone, app) {

	app.models.Usuario = Backbone.Model.extend({
		defaults: {
			username: ''
		}
	});

	return {
		getUserModel: function () { return app.models.usuario; }
	};
});
