define([
  'backbone',
  'JST/app',
  'jquery',
],

function (Backbone, template, $) {
  'use strict';

  var AppView = Backbone.View.extend({
    className: 'container',
    template: template,

    events: {
      'click': 'handleClick',
    },

    initialize: function initialize (options) {
      this.app = options.app;

      this.addListeners();
    },

    addListeners: function addListeners () {
      this.listenTo(this.app.collections.myCollection, 'reset', this.populateView);
    },

    render: function render () {
      $('body').prepend(this.$el);
      return this;
    },

    populateView: function populateView (collection) {
      var data = { names: collection.toJSON() };

      this.$el.html( this.template(data) );
    },

    handleClick: function handleClick (evt) {
      console.log(evt);
    },
  });

  return AppView;
});

