'use strict';

// require a database library like mongoose and configure it
// var mongoose = require('mongoose');

// instead we'll make a fake database and data to illustrate how to integrate it
// BEGIN fake database/data
var people = [
  { 'name': 'Fred', 'class': 'fred' },
  { 'name': 'Scooby', 'class': 'scooby' },
  { 'name': 'Shaggy', 'class': 'shaggy' },
  { 'name': 'Velma', 'class': 'velma' },
  { 'name': 'Daphne', 'class': 'daphne' },
];

var Person = {
  find: function find (params, callback) {
    return callback(null, people);
  },
};
// END fake database/data


// now we'll include our actual database functions,
// which can be consumed by an API
exports.getPeople = function (callback) {
  Person.find({ example: 1 }, function (err, people) {
    // in reality you will ALWAYS want to validate
    // your data before sending it to the browser,
    // or before inserting it into the database,
    // to prevent XSS attacks.
    //
    // I recommend something like node-validator:
    // https://github.com/chriso/node-validator/
    return callback(err, people);
  });
};

// demonstrating what effect an error would produce
exports.getError = function (callback) {
  var error = new Error('database error');

  // 504 Gateway Timeout
  // The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
  error.status = 504;

  return callback(error);
};


/**
 * in a unit-testing/coverage-testing environment,
 * we can export internal functions for testing too,
 * rather than just what's normally exported in the module.
 */

// a function to demonstrate how you can test internal functions.
// check the test/backend/ directory for an example.
function addSandwich (data) {
  var sandwich = { 'name': 'A Large Sandwich', 'class': 'sandwich' };

  data.push(sandwich);
}

// here's where it's used in production, although it's not exported,
// so normally it couldn't be tested.
addSandwich(people);

// export the internal function only in a test environment
if (process.env.NODE_ENV === 'test') {
  exports.addSandwich = addSandwich;
}
