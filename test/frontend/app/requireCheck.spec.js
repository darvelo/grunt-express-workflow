// all require() and define() calls are
// relative to your dev app directory
define([
  'jquery',
  'underscore'
],

function($, _) {
  describe('just checking', function() {

    it('works for jquery', function() {
      var el = $('<div></div>');
      el.text('require.js up and running');

      expect(el.text()).to.equal('require.js up and running');
    });

    it('works for underscore', function() {
      // just checking that _ works
      expect(_.size([1,2,3])).to.equal(3);
    });
  });
});
