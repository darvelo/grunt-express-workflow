'use strict';

var people = exports.people = require('./people');

// placeholder for app instance
var app;
exports.use = function (appInstance) {
  app = appInstance;

  people.use(app);
};
