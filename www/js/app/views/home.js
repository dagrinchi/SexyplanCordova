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
		tpl = require('text!tpl/home.html');

	return Backbone.View.extend({

		template: _.template(tpl),

		events: {
			"click #acept": "acept"
		},

		acept: function(e) {
			if (e.currentTarget.checked) {
				window.localStorage.setItem("acept", true);
			} else {
				window.localStorage.setItem("acept", false);
			}
			console.log("Acepto los términos! " + window.localStorage.getItem("acept"));
			return true;
		},

		render: function() {
			this.$el.html(this.template);
			var self = this;
			var acept = window.localStorage.getItem("acept");
			if (typeof acept !== "undefined") {
				setTimeout(function() {
					$('#acept').prop('checked', $.parseJSON(acept));
				}, 300);
			}
			// setTimeout(function() {
				// dhx.ui({
				// 	id: "home",
				// 	container: "home",
				// 	view: "layout",
				// 	width: $("#home").width() - 25,
				// 	height: $("#home").height(),
				// 	css: "home1",
				// 	rows: [{
				// 		view: "scrollview",
				// 		scroll: "y",
				// 		css: "terminos-cond",
				// 		content: {
				// 			height: 210,
				// 			rows: [{
				// 				content: "terminos"
				// 			}]
				// 		},
				// 		height: 100
				// 	}, {
				// 		content: "arrow",
				// 		height: 15
				// 	}, {
				// 		view: "scrollview",
				// 		scroll: "y",
				// 		content: {
				// 			height: 215,
				// 			rows: [{
				// 				content: "products"
				// 			}]
				// 		}
				// 	}]
				// });
			// }, 50);
			return this;
		}

	});

});