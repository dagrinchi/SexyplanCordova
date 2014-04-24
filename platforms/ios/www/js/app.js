/**
 * @dagrinchi
 * Author:
 * David Alméciga: wdavid@dagrinchi.com"
 */

var App = {
    router: {},
    models: {},
    collections: {},
    views: {},
    slider: {},
    utils: {}
};

require.config({

    waitSeconds: 120,

    baseUrl: 'js/lib',

    paths: {
        app: '../app',
        tpl: '../tpl',
        async: '../lib/requirejs-plugins/async',
        goog: '../lib/requirejs-plugins/goog'
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require(['app/router', 'ratchet', 'pageslider', '../../phonegap'], function(router) {
    document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
    document.addEventListener('deviceready', function() {
        App.router = new router();
        Backbone.history.start();
    });
});