'use strict';

require.config({
  paths: {
    json2: '../../components/json2/json2',
    jquery: '../../components/jquery/jquery',
    // needed for precompiled templates
    handlebars: '../../components/handlebars/handlebars.runtime',
    JST: 'templates',
    underscore: '../../components/lodash/lodash',
    backbone: '../../components/backbone/backbone',
  },
  shim: {
    json2: {
      exports: 'JSON',
    },
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
  }
});

require(['app', 'jquery'], function (App, $) {
  $(document).ready(function () {
    var app = new App();
  });
});

