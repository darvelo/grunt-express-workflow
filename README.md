## Intro

These files are meant to help you quickly get up and running using Grunt with Express, with livereload and automatic app server reboots for rapid development. Client-side libraries are retrieved with `bower`.

Popular client-side libraries included and configured:

* Modernizr
* jQuery
* Backbone
* Lo-dash
* RequireJS
* Handlebars
* JSON2.js
* SASS with Compass

Server-side libraries included and configured:

* Express
* Jade
* node-inspector

Grunt plugins I included in `package.json` and configured in `Gruntfile.js` are:

* grunt-nodemon (~0.0.2)
* grunt-contrib-handlebars - for precompiled client-side templates
* grunt-concurrent (~0.2.0 !important)
* grunt-contrib-watch (~0.4.3 !important)

## Yeoman strong

This scaffold is based off of the default Yeoman scaffold, started with

`$ yo webapp`

I've built on it from that initial state. You'll notice that Twitter Bootstrap files were removed and Mocha unit tests were left unchanged from the initial `webapp` scaffold. It's intended that you set those up if and however you like, as many configurations are possible, especially with RequireJS. You're encouraged to check out [phawk's Backbone Stack](https://github.com/phawk/Backbone-Stack) for one example. My testing setup is very different from his. I'm also using [Testem](https://github.com/airportyh/testem) as a test harness in my project setup, and not `grunt test` as in the Gruntfile.

## "But how do I use this? Why did you make this?"

This and more in the [companion blog post](http://arvelocity.com/2013/05/30/running-an-express-server-with-grunt-and-yeoman-part-2/) to this repository.

### Special Notes:

If you want to `grunt build` for production with Handlebars in your project, you'll need to change the Handlebars runtime library code from the initial `var Handlebars = {};` to `this.Handlebars = {};` so that it'll be attached to the `window` object and found by RequireJS modules. It seems this is being fixed upstream with the Handlebars developers at the time of this writing.
