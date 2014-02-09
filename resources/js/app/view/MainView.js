

define (['backbone', 'app/app', 'app/templates'], function (Backobone, app) {
	app.views.MainView = Backbone.View.extend({
		tagName: 'div',
		className: 'container contenidos',
		template: _.template(app.templates.main),
		initialize: function () {},
		render: function () {
			this.$el.html(this.template());
			if (typeof this.contentView != 'undefined') {
				this.$el.find('.content-view-div').empty();
				this.contentView.render().$el.appendTo(this.$el.find('.content-view-div'));
			}
			return this;
		},
		setContentView: function (view) {
			this.contentView = view;
			this.render();
		}
	});
	return {
		getMainView: function () { return app.views.MainView; }
	};
});