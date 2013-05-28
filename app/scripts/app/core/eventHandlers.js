define([

],

function () {
  'use strict';

  // placeholder for when the app instance
  // is passed in from its constructor
  var app;

  function myCollectionReset () {
    console.log('collection reset!');
    console.log(app.collections.myCollection.toJSON());
  }

  function init (_app) {
    app = _app;

    return {
      myCollectionReset: myCollectionReset,
    };
  }

  return init;
});
