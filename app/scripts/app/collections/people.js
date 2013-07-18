define([
  'backbone',
  'models/person',
],

function (Backbone, Person) {
  'use strict';

  var PeopleCollection = Backbone.Collection.extend({
    url: '/api/people',
    model: Person,
  });

  return PeopleCollection;
});
