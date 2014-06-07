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

		render: function() {
			this.$el.html(this.template);
			var self = this;			
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