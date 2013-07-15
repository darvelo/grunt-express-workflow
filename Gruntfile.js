/*jshint indent:4*/
// Generated on 2013-05-01 using generator-webapp 0.1.7
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    var nodemonIgnoredFiles = [
        'README.md',
        'Gruntfile.js',
        'node-inspector.js',
        'karma.conf.js',
        '/.git/',
        '/node_modules/',
        '/app/',
        '/dist/',
        '/test/',
        '/coverage/',
        '/temp/',
        '/.tmp',
        '/.sass-cache',
        '*.txt',
        '*.jade',
    ];

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            coffee: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.coffee'],
                tasks: ['coffee:dist']
            },
            coffeeTest: {
                files: ['test/spec/{,*/}*.coffee'],
                tasks: ['coffee:test']
            },
            options: {
                livereload: true
            },
            compass: {
                files: ['<%= yeoman.app %>/styles/**/*.{scss,sass}'],
                tasks: ['compass:server'],
                options: {
                    livereload: false,
                },
            },
            handlebars: {
                files: [
                    '<%= yeoman.app %>/scripts/app/rawTemplates/**/*.hbs',
                ],
                tasks: ['handlebars:app'],
                options: {
                    livereload: false,
                },
            },
            scripts: {
                files: [
                    '{.tmp,<%= yeoman.app %>}/scripts/**/*.js',
                ],
            },
            // put all karma targets into the `tasks` array
            karma: {
                files: [
                    '{.tmp,<%= yeoman.app %>}/scripts/**/*.js',
                    'test/frontend/**/*.js',
                ],
                tasks: ['karma:app:run'],
                options: {
                    livereload: false,
                },
            },
            coverageBackend: {
                files: [
                    '!Gruntfile.js',
                    '!node-inspector.js',
                    '!karma.conf.js',
                    '*.js',
                    'lib/**/*.js',
                    'test/backend/**/*.js',
                ],
                tasks: ['coverageBackend'],
                options: {
                    livereload: false,
                },
            },
            css: {
                files: [
                    '{.tmp,<%= yeoman.app %>}/styles/**/*.css',
                ],
            },
            images: {
                files: [
                    '<%= yeoman.app %>/images/**/*.{png,jpg,jpeg,webp}'
                ],
            },
        },
        open: {
            server: {
                // change to the port you're using
                path: 'http://localhost:9000'
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            compassSprites: {
                files: [{
                    src: [
                        '<%= yeoman.dist %>/images/sprites/*',
                        '!<%= yeoman.dist %>/images/sprites/*.*',
                    ],
                }],
            },
            useminHTML: ['<%= yeoman.dist %>/usemin.html'],
            server: ['.tmp'],
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/**/*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/**/*.js'
            ]
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://localhost:<%= connect.options.port %>/index.html']
                }
            }
        },
        coffee: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/scripts',
                    src: '{,*/}*.coffee',
                    dest: '.tmp/scripts',
                    ext: '.js'
                }]
            },
            test: {
                files: [{
                    expand: true,
                    cwd: 'test/spec',
                    src: '{,*/}*.coffee',
                    dest: '.tmp/spec',
                    ext: '.js'
                }]
            }
        },
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/styles',
                cssDir: '.tmp/styles',
                imagesDir: '<%= yeoman.app %>/images',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/styles/fonts',
                importPath: 'app/components',
                // advanced compass config necessary for spritemaps
                // https://gist.github.com/passy/5270050
                // https://github.com/yeoman/yeoman/issues/419
                config: 'compass.rb',
                // `relativeAssets: true` messes up spritemap url() references in CSS
                relativeAssets: false,
            },
            dist: {},
            server: {
                options: {
                    debugInfo: true,
                }
            }
        },
        // not used since Uglify task does concat,
        // but still available if needed
        /*concat: {
            dist: {}
        },*/
        requirejs: {
            app: {
                // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
                options: {
                    baseUrl: 'app/scripts/app',
                    // uses `app/scripts/app/main.js` as a starting point for optimization
                    name: 'main',
                    // final output file after optimization (uglifying, pruning has() tests, etc.)
                    out: 'dist/scripts/app/main.js',
                    // notifies the optimizer that has() test branches with this/these variables can be optimized out
                    // http://requirejs.org/docs/optimization.html#hasjs
                    has: {
                        // a has() assignment only for unit testing. RequireJS modules are able to
                        // return different values when unit tests set this variable to true
                        //
                        // http://arvelocity.com/2013/07/02/running-an-express-server-with-grunt-and-yeoman-part-3/
                        internalTest: false,
                    },
                    paths: {
                        json3: '../../components/json3/lib/json3',
                        jquery: '../../components/jquery/jquery',
                        // needed for precompiled templates
                        handlebars: '../../components/handlebars/handlebars.runtime',
                        // templates are compiled from '/.tmp'!
                        // in dev, express handles mapping that to '/scripts/app/templates'
                        JST: '../../../.tmp/scripts/app/templates',
                        underscore: '../../components/lodash/dist/lodash.min',
                        backbone: '../../components/backbone/backbone-min',
                    },
                    shim: {
                        handlebars: {
                            deps: [],
                            exports: 'Handlebars',
                        },
                        underscore: {
                            deps: [],
                            exports: '_',
                            // remove the global reference to _
                            // and make it internal to RequireJS
                            init: function () {
                                return this._.noConflict();
                            },
                        },
                        backbone: {
                            deps: ['jquery', 'underscore'],
                            exports: 'Backbone',
                            // remove the global reference to Backbone
                            // and make it internal to RequireJS
                            init: function (jquery, underscore) {
                                return this.Backbone.noConflict();
                            },
                        },
                    },
                    optimize: 'uglify2',
                    // TODO: Figure out how to make sourcemaps work with grunt-usemin
                    // https://github.com/yeoman/grunt-usemin/issues/30
                    //generateSourceMaps: true,
                    // required to support SourceMaps
                    // http://requirejs.org/docs/errors.html#sourcemapcomments
                    preserveLicenseComments: false,
                    useStrict: true,
                    wrap: true,
                    //uglify2: {} // https://github.com/mishoo/UglifyJS2

                    // use almond in production
                    // https://github.com/asciidisco/grunt-requirejs/blob/master/docs/almondIntegration.md
                    almond: true,
                }
            },
        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/styles/{,*/}*.css',
                        '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                        '<%= yeoman.dist %>/styles/fonts/*'
                    ]
                }
            }
        },
        useminPrepare: {
            html: '<%= yeoman.app %>/usemin.html',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/**/*.css'],
            options: {
                dirs: ['<%= yeoman.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '**/*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/images'
                },
                {
                    // Copy generated sprites over to the dist/
                    // folder during the build step.
                    expand: true,
                    cwd: '.tmp/images/sprites',
                    src: '{,*/}*.png',
                    dest: '<%= yeoman.dist %>/images/sprites',
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/styles/vendor/normalize.css': '<%= yeoman.app %>/components/normalize-css/normalize.css',
                    '<%= yeoman.dist %>/styles/normal.css': [
                        // list any css files you'd like to combine/minify into normal.css here
                        '.tmp/styles/normal.css',
                    ],
                    '<%= yeoman.dist %>/styles/app.css': [
                        '.tmp/styles/app.css',
                    ],
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'images/**/*.{webp,gif}',
                        'styles/fonts/*'
                    ]
                }]
            }
        },
        concurrent: {
            nodemon: {
                options: {
                    logConcurrentOutput: true,
                },
                tasks: [
                    'nodemon:nodeInspector',
                    'nodemon:dev',
                    'watch',
                ],
            },
            server: [
                'coffee:dist',
                'compass:server',
                'handlebars:app',
            ],
            test: [
                'coffee',
                'compass',
                'handlebars:app',
            ],
            dist: [
                'coffee',
                'handlebars:app',
                'compass:dist',
                'svgmin',
                'htmlmin'
            ]
        },
        bower: {
            options: {
                exclude: ['modernizr']
            },
            all: {
                rjsConfig: '<%= yeoman.app %>/scripts/main.js'
            }
        },
        uglify: {
            options: {
                mangle: {
                    sort: true,
                    toplevel: false,
                    eval: true,
                    except: ['jQuery', 'Backbone', '$', '_'],
                },
                compress: true,
                report: 'min',
                wrap: true,
                preserveComments: false,
            },
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/scripts/misc',
                    dest: '<%= yeoman.dist %>/scripts/misc',
                    src: '**/*.js',
                }]
            }
        },
        handlebars: {
            app: {
                options: {
                    namespace: false,
                    amd: true,
                    processContent: function(content) {
                        content = content.replace(/^[\x20\t]+/mg, '').replace(/[\x20\t]+$/mg, '');
                        content = content.replace(/^[\r\n]+/, '').replace(/[\r\n]*$/, '\n');
                        return content;
                    }
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/scripts/app/rawTemplates/',
                    src: ['**/*.hbs'],
                    dest: '.tmp/scripts/app/templates/',
                    ext: '.js',
                }],
            },
        },
        nodemon: {
            dev: {
                options: {
                    file: 'server.js',
                    args: ['development'],
                    watchedExtensions: [
                        'js',
                        'coffee'
                    ],
                    // nodemon watches the current directory recursively by default
                    // watchedFolders: ['.'],
                    debug: true,
                    delayTime: 1,
                    ignoredFiles: nodemonIgnoredFiles,
                }
            },
            nodeInspector: {
                options: {
                    file: 'node-inspector.js',
                    watchedExtensions: [
                        'js',
                        'coffee'
                    ],
                    exec: 'node-inspector',
                    ignoredFiles: nodemonIgnoredFiles,
                },
            },
        },
        karma: {
            options: {
                // configure browsers that will work for you.
                // it's also possible to specify scripts/binaries that will take a URL argument:
                // browsers: ['/usr/bin/firefox'],

                // Currently available:
                // - Chrome
                // - ChromeCanary
                // - Firefox
                // - Opera
                // - Safari (only Mac)
                // - PhantomJS
                // - IE (only Windows)
                browsers: ['Firefox'],
                // run karma in a child process so it doesn't block subsequent grunt tasks.
                background: true,
            },
            // NoCoverage tasks are slightly faster
            // Continous tasks are used for a single run, such as during a build

            // `karma` task settings for testing the namespaced client-side app
            app: {
                configFile: 'karma.app.conf.js',
                runnerPort: 9100,

                reporters: ['dots', 'coverage'],
                coverageReporter: {
                    type: 'html',
                    dir: 'coverage/frontend/app/',
                },
                preprocessors: {
                    '**/app/scripts/app/**/*.js': 'coverage',
                },
                // exclude: [],
            },
            appNoCoverage: {
                configFile: 'karma.app.conf.js',
                runnerPort: 9100,

                reporters: ['dots'],
            },
            appContinuous: {
                configFile: 'karma.app.conf.js',
                runnerPort: 9100,

                reporters: ['dots', 'coverage'],
                coverageReporter: {
                    type: 'html',
                    dir: 'coverage/frontend/app/',
                },
                preprocessors: {
                    '**/app/scripts/app/**/*.js': 'coverage',
                },

                background: false,
                singleRun: true,
            },
            appContinuousNoCoverage: {
                configFile: 'karma.app.conf.js',
                runnerPort: 9100,

                reporters: ['dots'],

                background: false,
                singleRun: true,
            },
        },
        // simplemocha executes server-side tests
        // without Istanbul Coverage, significantly faster
        simplemocha: {
            options: {
                globals: [
                    'sinon',
                    'chai',
                    'should',
                    'expect',
                    'assert',
                    'AssertionError',
                ],
                timeout: 3000,
                ignoreLeaks: false,
                // grep: '*.spec',
                ui: 'bdd',
                reporter: 'spec'
            },
            backend: {
                src: [
                    // add chai and sinon globally
                    'test/backend/support/globals.js',

                    // tests
                    'test/backend/**/*.spec.js',
                ],
            },
        },
    });

    grunt.registerTask('coverageBackend', 'Test backend files as well as code coverage.', function () {
        var done = this.async();

        var path = './test/backend/runner.js';

        var options = {
            cmd: 'istanbul',
            grunt: false,
            args: [
                'cover',
                '--default-excludes',
                '-x', 'app/**',
                '--report', 'lcov',
                '--dir', './coverage/backend',
                path
            ],
            opts: {
                // preserve colors for stdout in terminal
                stdio: 'inherit',
            },
        };

        function doneFunction(error, result, code) {
            if (result && result.stderr) {
                process.stderr.write(result.stderr);
            }

            if (result && result.stdout) {
                grunt.log.writeln(result.stdout);
            }

            // abort tasks in queue if there's an error
            done(error);
        }

        grunt.util.spawn(options, doneFunction);
    });

    grunt.registerTask('server', [
        'concurrent:server',

        // start karma server
        'karma:app',

        'concurrent:nodemon',
    ]);

    grunt.registerTask('test', [
        'concurrent:server',

        // tests with coverage.
        // the server-side coverage test is slower
        'karma:appContinuous',
        'coverageBackend',

        // faster tests without Istanbul coverage
        // 'karma:appContinuousNoCoverage',
        // 'simplemocha:backend',
    ]);

    grunt.registerTask('build', [
        'clean:dist',

        'karma:appContinuous',
        'coverageBackend',

        'concurrent:dist',

        // place after compass:dist in order to
        // ensure compass spritemaps are generated
        // before images are copied over to dist/
        'imagemin',

        'uglify:dist',

        'useminPrepare',

        'cssmin',
        'concat',
        'uglify',
        'copy',

        // Any other requirejs 'sub-projects' can be
        // compiled with 'requirejs:subprojectName'
        'requirejs:app',

        // 'rev',
        'usemin',

        // remove sprites folders in dist/images/sprites/
        // in favor of having just the spritesheet files
        'clean:compassSprites',

        // remove useless usemin.html in dist/
        'clean:useminHTML',
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
