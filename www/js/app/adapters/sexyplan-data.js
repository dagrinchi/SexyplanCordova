/**
 * @dagrinchi
 * Author:
 * David Alméciga: wdavid@dagrinchi.com"
 */

define(function(require) {

	"use strict";

	var $ = require('jquery');

	var findByIdInyectables = function(id) {
		var deferred = $.Deferred();
		deferred.resolve(getProduct(inyectables, id));
		return deferred.promise();
	};

	var findByIdPildoras = function(id) {
		var deferred = $.Deferred();
		deferred.resolve(getProduct(pildoras, id));
		return deferred.promise();
	};

	function getProduct(products, id) {
		var product = null;
		var l = products.length;
		for (var i = 0; i < l; i++) {
			if (products[i].id === id) {
				product = products[i];
				break;
			}
		}
		return product;
	}

	var findAllInyectables = function() {
		var deferred = $.Deferred();
		deferred.resolve(inyectables);
		return deferred.promise();
	};

	var findAllPildoras = function() {
		var deferred = $.Deferred();
		deferred.resolve(pildoras);
		return deferred.promise();
	};

	var inyectables = [{
		"id": 1,
		"marca": "Depotrim",
		"pastillaInyeccion": "Inyectable",
		"numero": 1,
		"frecuencia": "1 inyeccion trimestral",
		"caracteristica": "Ampolla lechosa",
		"modoUso": "Se inicia a la 4 o 6 semana postparto y de ahí en adelante cada 3 meses fecha calendario llegue o no llegue el periodo.",
		"image": "de-100.png",
		"rec_type" : "month_3___#"
	}, {
		"id": 2,
		"marca": "Femelin",
		"pastillaInyeccion": "Inyectable",
		"numero": 1,
		"frecuencia": "1 inyeccion mensual",
		"caracteristica": "Ampolla lechosa",
		"modoUso": "Se inicia primer dia de la mestruación y se aplica cada mes fecha calendario llegue o no el periodo menstrual.",
		"image": "fe-100.png",
		"rec_type" : "month_1___#"
	}, {
		"id": 3,
		"marca": "Nofertyl",
		"pastillaInyeccion": "Inyectable",
		"numero": 1,
		"frecuencia": "1 inyeccion mensual",
		"caracteristica": "Ampolla aceitosa",
		"modoUso": "Se inicia primer dia de la mestruación y se aplica cada mes fecha calendario llegue o no el periodo menstrual.",
		"image": "no-100.png",
		"rec_type" : "month_1___#"
	}, {
		"id": 4,
		"marca": "Sinovular",
		"pastillaInyeccion": "Inyectable",
		"numero": 1,
		"frecuencia": "1 inyeccion mensual",
		"caracteristica": "Ampolla aceitosa",
		"modoUso": "Se inicia al 8 día de la menstruación y se espera cada ciclo a que llegue el periodo y se aplica al 8 dia despues de haber llegado.",
		"image": "si-100.png",
		"rec_type" : "month_1___#"
	}, {
		"id": 5,
		"marca": "Sinovular suave",
		"pastillaInyeccion": "Inyectable",
		"numero": 1,
		"frecuencia": "1 inyeccion mensual",
		"caracteristica": "Ampolla aceitosa",
		"modoUso": "Se inicia al 8 día de la menstruación y se espera cada ciclo a que llegue el periodo y se aplica al 8 dia despues de haber llegado.",
		"image": "si-100.png",
		"rec_type" : "month_1___#"
	}];

	var pildoras = [{
		"id": 1,
		"marca": "Yax",
		"pastillaInyeccion": "Pildoras diarias",
		"numero": 21,
		"frecuencia": "1 tableta diaria",
		"caracteristica": "Blancas",
		"modoUso": "Se inicia primer dia de la menstruacion y se toma todos los dias a la misma hora por 21 dias.",
		"image": "ya-100.png",
		"rec_type" : null
	}, {
		"id": 2,
		"marca": "Yaxibelle",
		"pastillaInyeccion": "Pildoras diarias",
		"numero": 28,
		"frecuencia": "1 tableta diaria",
		"caracteristica": "24 Rosadas y 4 blancas",
		"modoUso": "Se inicia primer dia de la menstruacion y se toma todos los dias por 28 días sin parar y vuelve a iniciar el siguiente blister sin parar.",
		"image": "ya-100.png",
		"rec_type" : null
	}, {
		"id": 3,
		"marca": "Bellaface",
		"pastillaInyeccion": "Pildoras diarias",
		"numero": 21,
		"frecuencia": "1 tableta diaria",
		"caracteristica": "Blancas",
		"modoUso": "Se inicia primer dia de la menstruacion y se toma todos los dias a la misma hora por 21 dias.",
		"image": "be-100.png",
		"rec_type" : null
	}, {
		"id": 4,
		"marca": "Minipil",
		"pastillaInyeccion": "Pildoras diarias",
		"numero": 21,
		"frecuencia": "1 tableta diaria",
		"caracteristica": "Blancas",
		"modoUso": "Se inicia primer dia de la menstruacion y se toma todos los dias a la misma hora por 21 dias.",
		"image": "mi-100.png",
		"rec_type" : null
	}, {
		"id": 5,
		"marca": "Poslac",
		"pastillaInyeccion": "Pildoras diarias",
		"numero": 35,
		"frecuencia": "1 tableta diaria",
		"caracteristica": "Blancas",
		"modoUso": "Se inicia 4 a 6 semanas postparto y se toma todos los dias por 35 días sin parar y vuelve y se inicia el siguiente blister.",
		"image": "po-100.png",
		"rec_type" : null
	}, {
		"id": 6,
		"marca": "Sinovul",
		"pastillaInyeccion": "Pildoras diarias",
		"numero": 21,
		"frecuencia": "1 tableta diaria",
		"caracteristica": "Blancas",
		"modoUso": "Se inicia primer dia de la menstruacion y se toma todos los dias a la misma hora por 21 dias.",
		"image": "si-100.png",
		"rec_type" : null
	}, {
		"id": 7,
		"marca": "Segubell Anticoncepción Flexible",
		"pastillaInyeccion": "Pildoras diarias",
		"numero": 28,
		"frecuencia": "1 tableta diaria",
		"caracteristica": "Blancas",
		"modoUso": "Régimen cíclico: Si quiere sangrar, se inicia el primer día de la menstruación, se toma todos los días a la misma hora por 24  días, desecha las últimas 4 tabletas que se encuentran en la franja roja, descansa 4 días y reinicia un nuevo blíster. Régimen Continuo: Si no desea sangrar, se inicia el primer día de la menstruación, se toma todos los días durante 28 días, al terminar el blíster al otro día inicia un nuevo blíster.",
		"image": "si-100.png",
		"rec_type" : null
	}];

	return {
		findByIdInyectables: findByIdInyectables,
		findByIdPildoras: findByIdPildoras,
		findAllInyectables: findAllInyectables,
		findAllPildoras: findAllPildoras
	};

});