define([
  // this will give us the normal return value for the module
  'core/eventHandlers'
],

function(eventHandlers) {
  /*
   * External Module Tests:
   *   tests using only the normal return value from the module itself
   */
  describe('app eventHandlers external tests', function() {

    it('should return eventHandlers function', function() {
      var app = {};
      app.eventHandlers = eventHandlers(app);

      expect(eventHandlers).to.be.a('function');
      expect(app.eventHandlers).to.be.an('object');
    });

    it('should check nonexistence of internal properties', function () {
      expect(eventHandlers).to.not.have.property('internalFunction');
    });

    it('should test collection reset handler', function () {
      var app = {};
      app.collections = {};
      app.collections.people = {
        toJSON: sinon.spy(),
      };

      app.eventHandlers = eventHandlers(app);
      expect(app.eventHandlers).to.have.property('PeopleCollectionReset');

      app.eventHandlers.PeopleCollectionReset();

      // be aware that `should` does NOT work in Internet Explorer
      // app.collections.myCollection.toJSON.should.have.been.calledOnce;

      // an alternative to `should`
      expect(app.collections.people.toJSON).to.have.been.calledOnce;
    });

    // pending test -- illustrating a test you may want to flesh out later
    it('should test resetting the collection');
  });

  /*
   * Internal Module Tests:
   *   tests using the internal functions and properties of the module
   */
  describe('app eventHandlers internal tests', function () {
    // placeholder variable for when we require() the module in a different context
    var eventHandlers;

    // this is run once, before any tests in this suite take place
    before(function (done) {
      // set internalTest environment so that the
      // eventHandlers module returns internal functions for testing
      has.add('internalTest', function () {
        return true;
      }, true);

      // remove the module from the requirejs cache so that we
      // can require() it again with the internalTest environment set
      require.undef('core/eventHandlers');

      require(['core/eventHandlers'], function (module) {
        eventHandlers = module;
        done();
      });
    });

    it('should return eventHandlers object', function() {
      expect(eventHandlers).to.be.an('object');
    });

    it('should test the existence of returned internal values', function () {
      expect(eventHandlers).to.have.property('init');
      expect(eventHandlers).to.have.property('PeopleCollectionReset');
      expect(eventHandlers).to.have.property('internalFunction');
    });

    it('should test internalFunction with no args', function () {
      var result = eventHandlers.internalFunction();
      expect(result).to.equal(0);
    });

    it('should test internalFunction with one argument', function () {
      var result = eventHandlers.internalFunction({ test: 'data'});
      expect(result).to.equal(1);
    });
  });
});
