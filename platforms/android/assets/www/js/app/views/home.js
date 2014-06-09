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
			return this;
		}

	});

});