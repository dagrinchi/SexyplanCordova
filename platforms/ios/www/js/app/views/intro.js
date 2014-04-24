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

		render: function() {
			this.$el.html(this.template);
			return this;
		}

	});

});