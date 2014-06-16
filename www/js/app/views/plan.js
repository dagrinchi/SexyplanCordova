/**
 * @dagrinchi
 * Author:
 * David Alméciga: wdavid@dagrinchi.com"
 */

define(function(require) {

	"use strict";

	var Backbone = require('backbone'),
		_ = require('underscore'),
		tpl = require('text!tpl/plan.html'),
		moment = require('moment');

	return Backbone.View.extend({

		template: _.template(tpl),

		events: {
			"click .btn-back": "back"
		},

		initialize: function() {
			this.collection.bind("add", function(model) {
				var init = moment(model.get("start_date"));
				var r = model.get("reminder").split("-");
				var reminder = init.subtract(r[0], parseInt(r[1], 0));
				var length = parseInt(model.get("event_length"), 0);
				var rec = model.get("rec_type");
				var key = "days";
				var number = 1;

				if (rec === "null") {
					key = "days";
				} else if (rec === "month_1___#") {
					key = "months";
				} else if (rec === "month_3___#") {
					key = "months";
					number = 3;
				}

				var i = 0;
				while (i < length) {
					window.plugin.notification.local.add({
						id: model.get("id") + "-" + i,
						title: "¡Oye!",
						message: model.get("text"),
						date: reminder.add(key, number).toDate(),
						autoCancel: true,
						badge: i,
						sound: App.sound
					});
					i++;
				}
			}, this);
		},

		back: function(event) {
			window.history.back();
			return false;
		},

		render: function() {
			this.$el.html(this.template);
			var data = this.collection.toJSON();
			setTimeout(function() {
				dhx.ui({
					id: "scheduler",
					view: "scheduler",
					container: "plan",
					height: $("#plan").height()
				});
				$$('scheduler').$$('month').show();
				$$("scheduler").$$("calendar").$setSize($("#plan").width(), 240);
				$$("scheduler").$$("calendarDayEvents").blockEvent();
				$$("scheduler").parse(data);
			}, 400);
			return this;
		}

	});

});