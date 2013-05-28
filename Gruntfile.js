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
        '/.git/',
        '/node_modules/',
        '/app/',
        '/dist/',
        '/test/',
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
                files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
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
                relativeAssets: true
            },
            dist: {},
            server: {
                options: {
                    debugInfo: true
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
                    // `name` and `out` set by grunt-usemin
                    baseUrl: 'app/scripts/app',
                    paths: {
                        json2: '../../components/json2/json2',
                        // needed for precompiled templates
                        handlebars: '../../components/handlebars/handlebars.runtime',
                        // templates are compiled from '/.tmp'!
                        // in dev, express handles mapping that to '/scripts/app/templates'
                        JST: '../../../.tmp/scripts/app/templates',
                        underscore: '../../components/lodash/dist/lodash.min',
                        backbone: '../../components/backbone/backbone-min',
                    },
                    shim: {
                        json2: {
                            deps: [],
                            exports: 'JSON',
                        },
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
                    '<%= yeoman.dist %>/styles/main.css': [
                        // list any css files you'd like to combine/minify into main.css here
                        '.tmp/styles/main.css',
                    ],
                    '<%= yeoman.dist %>/styles/app.css': [
                        '.tmp/styles/app.css',
                    ]
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
                'compass:dist',
                'handlebars:app',
                'imagemin',
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
                    exec: 'node-inspector',
                    ignoredFiles: nodemonIgnoredFiles,
                },
            },
        },
    });

    grunt.registerTask('server', [
        'concurrent:server',
        'concurrent:nodemon',
    ]);

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'connect:test',
        'mocha'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'concurrent:dist',
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
        'usemin'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
