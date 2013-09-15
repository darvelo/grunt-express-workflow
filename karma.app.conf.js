// Karma configuration
// Generated on Fri Jun 21 2013 23:43:35 GMT-0400 (EDT)

// this files tests the self-contained `app/scripts/app` RequireJS app.
// another karma config file is needed for tests that run from a different RequireJS app config


// base path, that will be used to resolve files and exclude
basePath = '';


// list of files / patterns to load in the browser
files = [
  MOCHA,
  MOCHA_ADAPTER,
  REQUIRE,
  REQUIRE_ADAPTER,

  'app/bower_components/sinonjs/sinon.js',
  'app/bower_components/has/has.js',

  {pattern: 'app/bower_components/**/*.js', included: false},
  {pattern: 'app/scripts/**/*.js', included: false},
  {pattern: '.tmp/scripts/**/*.js', included: false},

  {pattern: 'test/frontend/app/**/*.spec.js', included: false},

  // this line runs tests on the self-contained `app/scripts/app` RequireJS app.
  // another karma config file is needed for tests to run on a different RequireJS app config
  'test/frontend/app/config.js',
];


// list of files to exclude
// -- overridden in Gruntfile karma task
exclude = [];


// use dolts reporter, as travis terminal does not support escaping sequences
// possible values: 'dots', 'progress', 'junit', 'teamcity'
// CLI --reporters progress
// -- overridden in Gruntfile karma task
reporters = ['progress'];


// web server port
// CLI --port 9876
port = 9876;


// cli runner port
// CLI --runner-port 9100
// -- overridden in Gruntfile karma task
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
// CLI --colors --no-colors
colors = true;


// level of logging
// possible values: karma.LOG_DISABLE || karma.LOG_ERROR || karma.LOG_WARN || karma.LOG_INFO || karma.LOG_DEBUG
// CLI --log-level debug
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
// CLI --auto-watch --no-auto-watch
// - false since Grunt will take care of watching files
autoWatch = false;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
// CLI --browsers Chrome,Firefox,Safari
// -- overridden in Gruntfile karma task
browsers = [];


// If browser does not capture in given timeout [ms], kill it
// CLI --capture-timeout 5000
captureTimeout = 60000;


// Auto run tests on start (when browsers are captured) and exit
// CLI --single-run --no-single-run
// -- overridden in Gruntfile karma task
singleRun = false;

// report which specs are slower than 500ms
// CLI --report-slower-than 500
reportSlowerThan = 500;
