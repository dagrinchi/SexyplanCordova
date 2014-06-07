/**
 * @dagrinchi
 * Author:
 * David Alméciga: wdavid@dagrinchi.com"
 */

define(function(require) {

	"use strict";

	var $ = require('jquery'),
		Backbone = require('backbone'),
		_ = require('underscore'),
		moment = require('moment'),
		tpl = require('text!tpl/product.html');

	var Plan = require('app/models/plan');

	return Backbone.View.extend({

		template: _.template(tpl),

		events: {
			"click .btn-back": "back",
			"click #plan": "plan"
		},

		back: function(event) {
			window.history.back();
			return false;
		},

		plan: function() {
			var formData = $("#planForm").serializeArray();
			var data = {};
			$.map(formData, function(v, i) {
				var name = v["name"];
				var value = v["value"];

				if (value === "") {
					$("#" + name + "-lbl").css("color", "#c03e8a");
				} else {
					$("#" + name + "-lbl").css("color", "#000");
					data[name] = value;
				}
			});
			if (Object.keys(data).length >= 5) {

				var date = moment(data["start-date"] + " " + data["start-time"]);
				App.models.plan = new Plan.Model();
				App.models.plan.set("text", data["text"]);
				App.models.plan.set("start_date", date.format("YYYY-MM-DD HH:mm:ss"));
				App.models.plan.set("reminder", data["reminder"]);

				if (typeof data.rec_type === "undefined") {
					App.models.plan.set("end_date", date.add("days", data["numero"]).format("YYYY-MM-DD HH:mm:ss"));
					App.models.plan.set("event_length", data["numero"]);
				} else {
					App.models.plan.set("end_date", date.add("days", 12).format("YYYY-MM-DD HH:mm:ss"));
					App.models.plan.set("event_length", 12);
					App.models.plan.set("rec_type", data.rec_type);
				}

				App.models.plan.save(null, {
					"success": function(model) {
						navigator.notification.alert('Recordatorio guardado!', function() {
							window.history.back();
							return false;
							// App.router.navigate("calendar", {
							// 	trigger: true
							// });
						}, 'Listo!', 'Aceptar');
					}
				});
			}
			return false;
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			setTimeout(function() {
				dhx.ui({
					id: "product",
					container: "product",
					view: "layout",
					height: $("#product").height(),
					rows: [{
						view: "scrollview",
						scroll: "y",
						content: {
							height: 780,
							rows: [{
								content: "product-detail"
							}]
						}
					}]
				});
			}, 400);
			return this;
		}

	});

});