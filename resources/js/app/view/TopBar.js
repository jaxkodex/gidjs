

define (['backbone', 'app/app', 'app/templates'], function (Backbone, app, templates) {
	app.views.TopBar = Backbone.View.extend({
		initialize: function () {
		},
		tagName: 'div',
		className: 'navbar navbar-default navbar-fixed-top',
		template: _.template(app.templates.topBar),
		render: function () {
			this.$el.html(this.template());
			return this;
		}
	});
	return {
		getTopBar: function ()  { return app.views.TopBar; }
	};
});