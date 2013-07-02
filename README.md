## Intro

These files are meant to help you quickly get up and running using Grunt with Express, with livereload and automatic app server reboots and automatic testing for rapid development. Client-side libraries are retrieved with `bower`.

**Note:** It's important that you have the proper npm libraries globally installed:

```bash
$ npm install -g yo node-inspector nodemon grunt-cli bower karma istanbul
```

After installing the global dependencies above, run:

```bash
$ cd grunt-express-workflow
$ npm install
$ bower install
$ grunt server
```

And you're ready to go!

## What's Included

Popular client-side libraries included and configured:

* [Modernizr](http://modernizr.com/)
* [jQuery](http://jquery.com/)
* [Backbone](http://backbonejs.org)
* [Lo-dash](http://lodash.com/)
* [RequireJS](http://requirejs.org)
* [Handlebars](http://handlebarsjs.com/)
* [JSON3.js](http://bestiejs.github.io/json3/)
* [SASS](http://sass-lang.com/) with [Compass](http://compass-style.org/)

Server-side libraries included and configured:

* [Express](http://expressjs.com/)
* [Jade](http://jade-lang.com/)

Testing Libraries included and configured:

* [Karma](http://karma-runner.github.io/)
* [Istanbul](https://github.com/gotwarlost/istanbul)
* [Mocha](http://visionmedia.github.io/mocha/)
* [Chai](http://chaijs.com/)
* [Sinon-Chai](https://github.com/domenic/sinon-chai)
* [Sinon](http://sinonjs.org/)
* [node-inspector](https://github.com/dannycoates/node-inspector)

Grunt plugins I included in `package.json` and configured in `Gruntfile.js` are:

* [grunt-nodemon](https://github.com/ChrisWren/grunt-nodemon) (~0.0.2)
* [grunt-contrib-handlebars](https://github.com/gruntjs/grunt-contrib-handlebars/) - for precompiled client-side templates
* [grunt-concurrent](https://github.com/sindresorhus/grunt-concurrent) (~0.2.0 !important)
* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) (~0.4.3 !important)
* [grunt-simple-mocha](https://github.com/yaymukund/grunt-simple-mocha)
* [grunt-karma](https://github.com/karma-runner/grunt-karma)

## Yeoman strong

This scaffold is based off of the default Yeoman scaffold, started with

`$ yo webapp`

I've built on it from that initial state.

## Testing

Karma, Istanbul, and Mocha run automated tests and coverage for the frontend and backend. This happens when development files or test files are changed during a `grunt server` run, or when the `grunt test` command is run on the command line. More information can be found in [this blog post](http://arvelocity.com/2013/07/02/running-an-express-server-with-grunt-and-yeoman-part-3/).

## "But how do I use this? Why did you make this?"

This and more in the companion [blog](http://arvelocity.com/2013/05/30/running-an-express-server-with-grunt-and-yeoman-part-2/) [posts](http://arvelocity.com/2013/07/02/running-an-express-server-with-grunt-and-yeoman-part-3/) to this repository.

### Special Notes:

1. If you want to `grunt build` for production with Handlebars in your project, you'll need to change the Handlebars runtime library code from the initial `var Handlebars = {};` to `this.Handlebars = {};` so that it'll be attached to the `window` object and found by RequireJS modules. It seems this is being fixed upstream with the Handlebars developers at the time of this writing.

2. There's an issue in the `grunt-contrib-watch` task where if two targets are watching the same file(s), only the last defined target will run if the file(s) change. Right now this means client-side tests will run and livereload will not when client-side scripts are saved. You can switch this behavior by altering the watch target order in `Gruntfile.js`. Watch [grunt-contrib-watch issue #25](https://github.com/gruntjs/grunt-contrib-watch/issues/25) and upgrade your local copy of that library using `npm` when it's fixed.

## Changelog

0.2.0 - Namespaced Karma task targets in the Gruntfile as well as Istanbul coverage output files.
0.1.0 - Added Karma, Mocha, and Istanbul for a full-featured frontend and backend test framework.
