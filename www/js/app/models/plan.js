/**
 * @dagrinchi
 * Author:
 * David Alméciga: wdavid@dagrinchi.com"
 */

define(function(require) {

	"use strict";

	var Backbone = require('backbone');
	var Sexyplan = require('app/adapters/sexyplan-plan');

	var Model = Backbone.Model.extend({

		defaults: {
			"allDay": 1,
			"rec_type": ""
		},

		sync: function(method, model, options) {
			if (method === "create") {
				Sexyplan.create(this.toJSON()).done(function() {
					options.success();
				});
			}
		}

	});

	var Collection = Backbone.Collection.extend({

		model: Model,

		sync: function(method, model, options) {
			if (method === "read") {
				Sexyplan.findAll().done(function(d) {
					options.success(d);
				});
			}
		}

	});

	return {
		Model: Model,
		Collection: Collection
	};

});