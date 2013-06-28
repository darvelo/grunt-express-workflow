'use strict';

// placeholder for app instance
var app;
exports.use = function (appInstance) {
  app = appInstance;
};

// even though this method looks unnecessary since
// it's somewhat wrapping the database method,
// we might need to do something else with the data here,
// or even send a different response depending on
// other factors, such as whether the request was an XHR
exports.getAll = function (req, res, next) {
  app.db.getPeople(function (err, people) {
    if (err) {
      return next(err);
    }

    res.send(people);
  });
};

// demonstrating what effect an error would produce
exports.getError = function (req, res, next) {
  app.db.getError(function (err) {
    return next(err);
  });
};
