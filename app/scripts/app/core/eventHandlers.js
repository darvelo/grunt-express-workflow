define([

],

function () {
  'use strict';

  // placeholder for when the app instance
  // is passed in from its constructor
  var app;

  // a function to illustrate how to test
  // the internals of RequireJS modules
  function internalFunction (data) {
    if (data) {
      return 1;
    } else {
      return 0;
    }
  }

  function PeopleCollectionReset () {
    'console' in window && console.log('collection reset!');
    'console' in window && console.log(app.collections.people.toJSON());
  }

  function init (_app) {
    app = _app;

    return {
      PeopleCollectionReset: PeopleCollectionReset,
    };
  }

  // expose anything you want to the test environment.
  // you can even choose to return the module's normal value by using `has` within a test suite.
  // this entire branch will be removed automatically during a production build.
  if (has('internalTest')) {
    return {
      init: init,
      PeopleCollectionReset: PeopleCollectionReset,
      internalFunction: internalFunction,
    };
  }

  // otherwise return the module's normal value
  return init;
});
