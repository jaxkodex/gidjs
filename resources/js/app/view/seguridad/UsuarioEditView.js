

define (['backbone', 'app/app', 
			'app/templates'], function (Backbone, app) {
	
	app.views.UsuarioEditView = Backbone.View.extend({
		tagName: 'div',
		className: 'col-sm-12',
		template: _.template(app.templates.userEditForm),
		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

	return {
		getMainView: function () { return app.views.UsuarioEditView; }
	};
});
