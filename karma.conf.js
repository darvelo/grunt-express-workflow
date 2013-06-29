// Karma configuration
// Generated on Fri Jun 21 2013 23:43:35 GMT-0400 (EDT)


// base path, that will be used to resolve files and exclude
basePath = '';


// list of files / patterns to load in the browser
files = [
  MOCHA,
  MOCHA_ADAPTER,
  REQUIRE,
  REQUIRE_ADAPTER,

  'app/components/sinonjs/sinon.js',
  'app/components/has/has.js',

  {pattern: 'app/components/**/*.js', included: false},
  {pattern: 'app/scripts/**/*.js', included: false},
  {pattern: '.tmp/scripts/**/*.js', included: false},
  {pattern: 'test/frontend/**/*.spec.js', included: false},

  'test/frontend/app/config.js',
];


// list of files to exclude
exclude = [
  'app/scripts/app/config.js',
  'app/scripts/app/main.js',
];


// use dolts reporter, as travis terminal does not support escaping sequences
// possible values: 'dots', 'progress', 'junit', 'teamcity'
// CLI --reporters progress
reporters = ['progress'];


// web server port
// CLI --port 9876
port = 9876;


// cli runner port
// CLI --runner-port 9100
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
// CLI --colors --no-colors
colors = true;


// level of logging
// possible values: karma.LOG_DISABLE || karma.LOG_ERROR || karma.LOG_WARN || karma.LOG_INFO || karma.LOG_DEBUG
// CLI --log-level debug
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
// - false since Grunt will take care of watching files
// CLI --auto-watch --no-auto-watch
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
browsers = [];


// If browser does not capture in given timeout [ms], kill it
// CLI --capture-timeout 5000
captureTimeout = 60000;


// Auto run tests on start (when browsers are captured) and exit
// CLI --single-run --no-single-run
singleRun = false;

// report which specs are slower than 500ms
// CLI --report-slower-than 500
reportSlowerThan = 500;
