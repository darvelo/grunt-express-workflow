'use strict';

/*
 * Express Dependencies
 */
var express = require('express');
var app = express();
var port = 9000;

/*
 * App methods and libraries
 */
app.db = require('./lib/database');
app.api = require('./lib/api');

// propagate app instance throughout app methods
app.api.use(app);


/*
 * Set app settings depending on environment mode.
 * Express automatically sets the environment to 'development'
 */
if (process.env.NODE_ENV === 'production' || process.argv[2] === 'production') {
  console.log('Setting production env variable');
  app.set('env', 'production');

  // this 'dev' variable is available to Jade templates
  app.locals.dev = false;
} else {
  app.locals.dev = true;
}


/*
 * Config
 */
if (/^development|test$/.test(app.get('env'))) {
  app.use(express.logger('dev'));

  app.set('views', __dirname + '/views');
} else if (app.get('env') === 'production') {
  app.set('views', __dirname + '/dist/views');
}

app.set('view engine', 'jade');

// app.use(express.favicon());
app.use(express.cookieParser(/* 'some secret key to sign cookies' */ 'keyboardcat' ));
app.use(express.bodyParser());
app.use(express.compress());
app.use(express.methodOverride());

// our custom "verbose errors" setting
// which we can use in the templates
// via settings['verbose errors']
app.enable('verbose errors');

// disable them in production
// use $ NODE_ENV=production node server.js
if (app.get('env') === 'production') {
  app.disable('verbose errors');
}


// "app.router" positions our routes
// above the middleware defined below,
// this means that Express will attempt
// to match & call routes _before_ continuing
// on, at which point we assume it's a 404 because
// no route has handled the request.
app.use(app.router);


// host dev files if in dev mode
if (/^development|test$/.test(app.get('env'))) {
  app.use(express.static('.tmp'));
  app.use(express.static('app'));
} else if (app.get('env') === 'production') {
  app.use(express.static('dist/app'));
}


// Since this is the last non-error-handling
// middleware use()d, we assume 404, as nothing else
// responded.

// $ curl http://localhost:3000/notfound
// $ curl http://localhost:3000/notfound -H "Accept: application/json"
// $ curl http://localhost:3000/notfound -H "Accept: text/plain"

app.use(function(req, res, next) {
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

// error-handling middleware, take the same form
// as regular middleware, however they require an
// arity of 4, aka the signature (err, req, res, next).
// when connect has an error, it will invoke ONLY error-handling
// middleware.

// If we were to next() here any remaining non-error-handling
// middleware would then be executed, or if we next(err) to
// continue passing the error, only error-handling middleware
// would remain being executed, however here
// we simply respond with an error page.

app.use(function(err, req, res, next) {
  // we may use properties of the error object
  // here and next(err) appropriately, or if
  // we possibly recovered from the error, simply next().
  res.status(err.status || (err.status = 500));

  console.error('Server error catch-all says: ', err);

  // prevent users from seeing specific error messages in production
  if (app.get('env') !== 'development') {
    var newErr = new Error('Something went wrong. Sorry!');
    newErr.status = err.status;
    err = newErr;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({
      data: err,
      message: err.message
    });

    return;
  }

  if (req.accepts('html')) {
    res.render('errors', {
      data: err,
      message: err.message
    });

    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Error ' + err.status);
});


/*
 * Routes
 */
app.get('/', function(req, res, next) {
  // we use a direct database connection here
  // because the API would have sent JSON itself
  app.db.getPeople(function (err, people) {
    if (err) {
      return next(err);
    }

    res.render('app', {
      bootstrap: 'var bootstrap = ' + JSON.stringify(people) + ';',
    });
  });
});

app.get('/normal', function(req, res, next) {
  res.render('normal');
});

app.get('/api/people', app.api.people.getAll);
app.get('/api/peopleError', app.api.people.getError);

/*
 * Status Code pages
 */
app.get('/404', function(req, res, next){
  // trigger a 404 since no other middleware
  // will match /404 after this one, and we're not
  // responding here
  next();
});

app.get('/403', function(req, res, next){
  // trigger a 403 error
  var err = new Error('not allowed!');
  err.status = 403;
  next(err);
});

app.get('/500', function(req, res, next){
  // trigger a generic (500) error
  next(new Error('keyboard cat!'));
});


app.listen(port);
console.log('Express started on port ' + port);
