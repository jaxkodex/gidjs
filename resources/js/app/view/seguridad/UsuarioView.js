


define (['backbone', 'app/app', 
			'app/templates',
			'app/collection/UsuarioCollection',
			'app/view/seguridad/UsuarioEditView'], function (Backbone, app) {
	var UsuarioItemListView = Backbone.View.extend({
		tagName: 'tr',
		template: _.template(app.templates.userItemList),
		events: {
			'click .editme': 'edit'
		},
		render: function () {
			if (typeof this.model != 'undefined')
				this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		edit: function () {
			var editView = new app.views.UsuarioEditView({
				model: this.model
			});
			app.popup({
				view: editView
			});
		}
	});

	app.views.UsuarioView = Backbone.View.extend({
		tagName: 'div',
		className: 'col-sm-12',
		template: _.template(app.templates.userList),
		initialize: function (args) {
			this.router = args.router;
			this.collection = new app.collections.UsuarioCollection();
		},
		render: function () {
			var me = this;
			this.$el.html(this.template());
			this.collection.fetch({
				success: function () {
					me.$el.find('.usuarios_list tbody').empty();
					me.collection.each(function (usuario){
						me.addUsuarioItem(usuario);
					});
				},
				error: function (e) { alert('Error en concetividad con el servidor'); }
			});
			return this;
		},
		addUsuarioItem: function (usuario) {
			this.$el.find('.usuarios_list tbody').append((new UsuarioItemListView({
				model: usuario
			})).render().$el);
		}
	});
	return {
		getUsuarioView: function () { return app.views.UsuarioView; }
	};
});
