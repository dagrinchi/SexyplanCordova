/**
 * @dagrinchi
 * Author:
 * David Alméciga: wdavid@dagrinchi.com"
 */

define(function(require) {

	"use strict";

	var $ = require('jquery'),
		Backbone = require('backbone'),
		tpl = require('text!tpl/help.html');

	return Backbone.View.extend({

		template: _.template(tpl),

		events: {
			"click .btn-back": "back",
			"click #send": "send"
		},

		back: function(e) {
			window.history.back();
			return false;
		},

		send: function() {
			var formData = $("#helpForm").serializeArray();
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

			if (Object.keys(data).length >= 4) {
				console.log(data);
			}
			return false;
		},

		render: function() {
			this.$el.html(this.template);
			setTimeout(function() {
				dhx.ui({
					id: "help",
					container: "help",
					view: "layout",
					height: $("#help").height() + 175,
					rows: [{
						view: "scrollview",
						scroll: "y",
						content: {
							height: 600,
							rows: [{
								content: "helpForm",
								height: 356
							}, {
								content: "writeus"
							}]
						}
					}]
				});
			}, 400);
			return this;
		}

	});

});