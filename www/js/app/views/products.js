/**
 * @dagrinchi
 * Author:
 * David Alméciga: wdavid@dagrinchi.com"
 */

define(function(require) {

	"use strict";

	var $ = require('jquery'),
		Backbone = require('backbone'),
		_ = require('underscore');

	return Backbone.View.extend({

		events: {
			"click .btn-back": "back"
		},

		back: function(event) {
			window.history.back();
			return false;
		},

		render: function() {
			this.$el.html(this.template({
				data: this.collection.toJSON()
			}));
			setTimeout(function() {
				dhx.ui({
					id: "products",
					container: "products",
					view: "layout",
					height: $("#products").height(),
					rows: [{
						view: "scrollview",
						scroll: "y",
						content: {
							height: 560,
							rows: [{
								content: "products-list"
							}]
						}
					}]
				});
			}, 600);
			return this;
		}

	});

});