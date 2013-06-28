'use strict';

require.config({
  paths: {
    json3: '../../components/json3/lib/json3',
    jquery: '../../components/jquery/jquery',
    // needed for precompiled templates
    handlebars: '../../components/handlebars/handlebars.runtime',
    JST: 'templates',
    underscore: '../../components/lodash/lodash',
    backbone: '../../components/backbone/backbone',
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
