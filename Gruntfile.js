/*jshint indent:4*/
// Generated on 2013-05-01 using generator-webapp 0.1.7
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

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
            // coffee: {
            //     files: ['<%= yeoman.app %>/scripts/{,*/}*.coffee'],
            //     tasks: ['coffee:dist']
            // },
            // coffeeTest: {
            //     files: ['test/spec/{,*/}*.coffee'],
            //     tasks: ['coffee:test']
            // },
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
            server: ['.tmp'],
            compassSprites: {
                files: [{
                    src: [
                        '<%= yeoman.dist %>/<%= yeoman.app %>/images/sprites/*',
                        '!<%= yeoman.dist %>/<%= yeoman.app %>/images/sprites/*.*',
                    ],
                }],
            },
        },
        // jshint: {
        //     options: {
        //         jshintrc: '.jshintrc'
        //     },
        //     all: [
        //         'Gruntfile.js',
        //         '<%= yeoman.app %>/scripts/**/*.js',
        //         '!<%= yeoman.app %>/scripts/vendor/*',
        //         'test/spec/**/*.js'
        //     ]
        // },
        // mocha: {
        //     all: {
        //         options: {
        //             run: true,
        //             // urls: ['http://localhost:<%= connect.options.port %>/index.html']
        //         }
        //     }
        // },
        // coffee: {
        //     dist: {
        //         files: [{
        //             expand: true,
        //             cwd: '<%= yeoman.app %>/scripts',
        //             src: '{,*/}*.coffee',
        //             dest: '.tmp/app/scripts',
        //             ext: '.js'
        //         }]
        //     },
        //     test: {
        //         files: [{
        //             expand: true,
        //             cwd: 'test/spec',
        //             src: '{,*/}*.coffee',
        //             dest: '.tmp/spec',
        //             ext: '.js'
        //         }]
        //     }
        // },
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/styles',
                cssDir: '.tmp/styles',
                imagesDir: '<%= yeoman.app %>/images',
                generatedImagesDir: '.tmp/images',
                fontsDir: '<%= yeoman.app %>/styles/fonts',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                importPath: '<%= yeoman.app %>/bower_components',

                // advanced compass config necessary for spritemaps
                // https://gist.github.com/passy/5270050
                // https://github.com/yeoman/yeoman/issues/419
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images',
                httpFontsPath: '/styles/fonts',
                // let the grunt-rev task handle cache-busting
                assetCacheBuster: false,
                // `relativeAssets: true` messes up spritemap url() references in CSS
                relativeAssets: false,
                // this can house any extra settings we might
                // need not provided by grunt-contrib-compass.
                // cannot be combined with these options:
                //   * generatedImagesDir
                //   * httpImagesPath
                //   * httpGeneratedImagesPath
                //   * httpFontsPath
                //   * assetCacheBuster
                // config: 'compass.rb',
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= yeoman.dist %>/<%= yeoman.app %>/images'
                }
            },
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
                    // notifies the optimizer that has() test branches with this/these variables can be optimized out
                    // http://requirejs.org/docs/optimization.html#hasjs
                    has: {
                        // a has() assignment only for unit testing. RequireJS modules are able to
                        // return different values when unit tests set this variable to true
                        //
                        // http://arvelocity.com/2013/07/02/running-an-express-server-with-grunt-and-yeoman-part-3/
                        internalTest: false,
                    },
                    // since usemin uses our development requirejs config file, this will
                    // apply the relevant portions of the config, except where they differ. in this case,
                    // the path is left intact except for the JST path, which is replaced for the build.
                    paths: {
                        JST: '../../../.tmp/scripts/app/templates',
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
                    //uglify2: {} // https://github.com/mishoo/UglifyJS2
                    // optimize: 'uglify2',
                    // TODO: Figure out how to make sourcemaps work with grunt-usemin
                    // https://github.com/yeoman/grunt-usemin/issues/30
                    //generateSourceMaps: true,
                    // required to support SourceMaps
                    // http://requirejs.org/docs/errors.html#sourcemapcomments
                    preserveLicenseComments: false,
                    useStrict: true,
                    wrap: true,
                }
            },
        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/<%= yeoman.app %>/scripts/**/*.js',
                        '<%= yeoman.dist %>/<%= yeoman.app %>/styles/**/*.css',
                        '<%= yeoman.dist %>/<%= yeoman.app %>/images/**/*.{png,jpg,jpeg,gif,webp}',
                        '<%= yeoman.dist %>/<%= yeoman.app %>/styles/fonts/**/*.*'
                    ]
                }
            }
        },
        useminPrepare: {
            options: {
                dest: '<%= yeoman.dist %>/<%= yeoman.app %>'
            },
            html: ['<%= yeoman.app %>/{,*/}*.html', 'views/**/*.jade']
        },
        usemin: {
            options: {
                dirs: ['<%= yeoman.dist %>/<%= yeoman.app %>'],
                basedir: '<%= yeoman.dist %>/<%= yeoman.app %>',
            },
            html: ['<%= yeoman.dist %>/<%= yeoman.app %>/{,*/}*.html', '<%= yeoman.dist %>/views/**/*.jade'],
            css: ['<%= yeoman.dist %>/<%= yeoman.app %>/styles/{,*/}*.css']
        },
       imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '**/*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/<%= yeoman.app %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/<%= yeoman.app %>/images'
                }]
            }
        },
        cssmin: {
            // This task is pre-configured if you do not wish to use Usemin
            // blocks for your CSS. By default, the Usemin block from your
            // `index.html` will take care of minification, e.g.
            //
            //     <!-- build:css({.tmp,app}) styles/main.css -->
            //
            // dist: {
            //     files: {
            //         '<%= yeoman.dist %>/<%= yeoman.app %>/styles/main.css': [
            //             '.tmp/styles/{,*/}*.css',
            //             '<%= yeoman.app %>/styles/{,*/}*.css'
            //         ]
            //     }
            // }
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
                    dest: '<%= yeoman.dist %>/<%= yeoman.app %>'
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
                    dest: '<%= yeoman.dist %>/<%= yeoman.app %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/**/*.{webp,gif}',
                        'styles/fonts/{,*/}*.*',
                    ]
                }, {
                    // express server jade views
                    expand: true,
                    dot: true,
                    cwd: 'views',
                    dest: '<%= yeoman.dist %>/views/',
                    src: '**/*.jade',
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            },
        },
        modernizr: {
            devFile: '<%= yeoman.app %>/bower_components/modernizr/modernizr.js',
            outputFile: '<%= yeoman.dist %>/<%= yeoman.app %>/scripts/vendor/modernizr.js',
            files: [
                '<%= yeoman.dist %>/<%= yeoman.app %>/scripts/{,*/}*.js',
                '<%= yeoman.dist %>/<%= yeoman.app %>/styles/{,*/}*.css',
                '!<%= yeoman.dist %>/<%= yeoman.app %>/scripts/vendor/*'
            ],
            uglify: true
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
                // 'coffee:dist',
                'compass:server',
                'copy:styles',
                'handlebars:app',
            ],
            // test: [
                // 'coffee',
                // 'compass',
                // 'handlebars:app',
            // ],
            dist: [
                // 'coffee',
                'handlebars:app',
                'copy:styles',
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
                        // This might cause an issue starting the server
                        // See: https://github.com/appleYaks/grunt-express-workflow/issues/2
                        // 'coffee'
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
                        // This might cause an issue starting the server
                        // See: https://github.com/appleYaks/grunt-express-workflow/issues/2
                        // 'coffee'
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
        'concurrent:dist',

        'karma:appContinuous',
        'coverageBackend',

        'useminPrepare',

        // Any other requirejs 'sub-projects' can be
        // compiled with 'requirejs:subprojectName'
        'requirejs:app',

        // place after compass:dist in order to
        // ensure compass spritemaps are generated
        // before images are copied over to dist/
        'imagemin',

        'concat',
        'cssmin',
        'uglify',
        'modernizr',
        'copy:dist',

        'rev',
        'usemin',

        // remove sprites folders in dist/images/sprites/
        // in favor of having just the spritesheet files
        'clean:compassSprites',
    ]);

    grunt.registerTask('default', [
        // 'jshint',
        // 'test',
        'build'
    ]);
};
