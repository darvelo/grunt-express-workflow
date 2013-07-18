define([
  'backbone',
  'views/app',
  'core/config',
  'core/eventHandlers',
  'collections/people',
  'underscore',
],

function (Backbone, AppView, appConfig, appEventHandlers, PeopleCollection, _) {
  'use strict';

  var App = function() {
    this.eventHandlers = appEventHandlers(this);

    this.initializeData();
    this.addListeners();
    this.createViews();

    if (window.bootstrap) {
      this.resetData(window.bootstrap);
    }
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
      this.collections.people = new PeopleCollection();
    },

    addListeners: function addListeners () {
      this.listenTo(this.collections.people, 'reset', this.eventHandlers.PeopleCollectionReset);
    },

    createViews: function createViews () {
      /*
       * Create empty views
       */
      this.views.app = new AppView({ app: this });
      this.views.app.render();
    },

    resetData: function resetData (data) {
      this.collections.people.reset(data);
    },
  };

  _.extend(App.prototype, Backbone.Events);

  return App;
});

