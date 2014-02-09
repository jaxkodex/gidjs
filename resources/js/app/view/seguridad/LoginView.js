


define (['backbone', 'app/app', 'app/templates'], function (Backobone, app) {
	app.views.LoginView = Backbone.View.extend({
		tagName: 'div',
		className: 'col-sm-6 col-sm-offset-3',
		template: _.template(app.templates.login),
		events: {
			'submit form': 'doLogin'
		},
		initialize: function (args) {
			this.router = args.router;
		},
		render: function () {
			this.$el.html(this.template());
			return this;
		},
		doLogin: function (evt) {
			evt.preventDefault();
			// If user log in works then redirect :)
			this.router.navigate('home', {trigger: true});
		}
	});
	return {
		getMainView: function () { return app.views.LoginView; }
	};
});
