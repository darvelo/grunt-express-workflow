'use strict';

require.config({
  paths: {
    json3: '../../bower_components/json3/lib/json3',
    jquery: '../../bower_components/jquery/jquery',
    // needed for precompiled templates
    handlebars: '../../bower_components/handlebars/handlebars.runtime',
    JST: 'templates',
    underscore: '../../bower_components/lodash/dist/lodash.compat',
    backbone: '../../bower_components/backbone/backbone',
  },
  shim: {
    handlebars: {
      deps: [],
      exports: 'Handlebars',
    },
    underscore: {
      deps: [],
      exports: '_',
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone',
    },
  },
});

require(['main'], function () {});
