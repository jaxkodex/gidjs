
define(['jquery', 'backbone', 'app/app', 'app/templates'], function ($, Backbone, app, templates) {
	var popUpWindowModel = Backbone.Model.extend({
		defaults: {
			title: 'Nueva ventana',
			body: ''
		}
	});

	var eventHandlers = [], base_z_index = 10000, currentPopUp = null;

	app.views.PopUpWindow = Backbone.View.extend({
		events: {
			'click .close_popupwindow': 'closeMe',
			'mousedown .popup-window-move': 'handleMouseDown',
			'mouseup .popup-window-move': 'handleMouseUp'
		},
		initialize: function (attrs) {
			this.css = _.extend({}, attrs.css);
			this.model = new popUpWindowModel(attrs);
			this.viewToRender = attrs.view;
			this.dragValues = {
				holded: false
			};
			var eventHandler = function (evt) {
				var evt = evt || window.event, data = evt.data;
				if (data.dragValues.holded) {
					data.$el.css({
						top: (evt.clientY-data.dragValues.ydiff)+'px',
						left: (evt.clientX-data.dragValues.xdiff)+'px'
					});
					if(evt.stopPropagation) evt.stopPropagation();
					if(evt.preventDefault) evt.preventDefault();
					evt.cancelBubble=true;
					evt.returnValue=false;
				}
			};
			this.index = eventHandlers.length;
			eventHandlers.push(eventHandler);
			Backbone.$(document).on('mousemove', this, eventHandlers[this.index]);
		},
		tagName: 'div',
		className: 'popup-window',
		template: _.template(app.templates.popUpWindow),
		render: function () {
			if (typeof this.css != 'undefined') {
				this.$el.css(this.css);
			}
			this.$el.html(this.template(this.model.toJSON()));
			if (typeof this.viewToRender != 'undefined') {
				this.viewToRender.render().$el.appendTo(this.$el.find('.popup-window-body'));
			}
			this.bringToFront();
			return this;
		},
		closeMe: function () {
			this.$el.remove();
			Backbone.$(document).off('mousemove', eventHandlers[this.index]);
		},
		updateMyPosition: function () {
			this.$el.css({
				top: (Backbone.$(window).height() - parseFloat(this.$el.css('height')))/2,
				left: (Backbone.$(window).width() - parseFloat(this.$el.css('width')))/2
			});
		},
		handleMouseDown: function (evt) {
			var evt = evt || window.event,
				ypos = parseFloat(this.$el.css('top')),
				xpos = parseFloat(this.$el.css('left'));
			this.dragValues.holded = true;
			this.dragValues.ydiff = evt.clientY - (isNaN(ypos) ? 0 : ypos);
			this.dragValues.xdiff = evt.clientX - (isNaN(xpos) ? 0 : xpos);
			this.bringToFront();

			/* Remove selection */
			if(evt.stopPropagation) evt.stopPropagation();
			if(evt.preventDefault) evt.preventDefault();
			evt.cancelBubble=true;
			evt.returnValue=false;
		},
		handleMouseUp: function (evt) {
			this.dragValues.holded = false;
		},
		bringToFront: function () {
			if (currentPopUp != null) {
				currentPopUp.$el.css('z-index', base_z_index+eventHandlers.length-1);
			}
			this.$el.css('z-index', base_z_index+eventHandlers.length);
			currentPopUp = this;
		}
	});
	app.popups = [];
	app.popup = function (options) {
		var view = new app.views.PopUpWindow(options);
		$('body').append(view.render().$el);
		view.updateMyPosition();
	};
	return {
		getPopUpWindowView: function () { return app.views.PopUpWindow; }
	};
});
