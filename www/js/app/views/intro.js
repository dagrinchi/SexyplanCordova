/**
 * @dagrinchi
 * Author:
 * David Alméciga: wdavid@dagrinchi.com"
 */

define(function(require) {

	"use strict";

	var $ = require('jquery'),
		Backbone = require('backbone'),
		tpl = require('text!tpl/intro.html');

	return Backbone.View.extend({

		template: _.template(tpl),

		events: {
			"click #acept": "acept"
		},

		acept: function(e) {
			if (e.currentTarget.checked) {
				window.localStorage.setItem("acept", true);
				App.router.navigate("home", {
					trigger: true
				});

			} else {
				window.localStorage.setItem("acept", false);
			}
			console.log("Acepto los términos! " + window.localStorage.getItem("acept"));
			return true;
		},

		render: function() {
			this.$el.html(this.template);
			var acept = window.localStorage.getItem("acept");
			if (typeof acept !== "undefined") {
				setTimeout(function() {
					$('#acept').prop('checked', $.parseJSON(acept));
				}, 300);
			}
			return this;
		}

	});

});