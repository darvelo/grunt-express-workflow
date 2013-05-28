define([
  'backbone',
  'views/app',
  'core/config',
  'core/eventHandlers',
  'underscore',
],

function (Backbone, AppView, appConfig, appEventHandlers, _) {
  'use strict';

  var App = function() {
    this.eventHandlers = appEventHandlers(this);

    this.initializeData();
    this.addListeners();
    this.createViews();

    this.resetData();
  };

  App.prototype = {
    views: {},
    models: {},
    collections: {},

    initializeData: function initializeData () {
      /*
       * Instantiate empty global models and collections that other,
       * local collections, and views, will reference once populated
       */
      this.collections.myCollection = new Backbone.Collection([]);
    },

    addListeners: function addListeners () {
      this.listenTo(this.collections.myCollection, 'reset', this.eventHandlers.myCollectionReset);
    },

    createViews: function createViews () {
      /*
       * Create empty views
       */
      this.views.app = new AppView({ app: this });
      this.views.app.render();
    },

    resetData: function resetData () {
      var data = [
        { "name": "Fred" },
        { "name": "Scooby" },
        { "name": "Shaggy" },
        { "name": "Velma" },
        { "name": "Daphne" },
      ];

      this.collections.myCollection.reset(data);
    },
  };

  _.extend(App.prototype, Backbone.Events);

  return App;
});

