var db = source('lib/database');

describe('database tests', function () {
  it('should test getting data', function (done) {
    expect(db).to.have.property('getPeople');
    db.getPeople.should.be.a('function');

    db.getPeople(function (err, people) {
      if (err) {
        return done(err);
      }

      expect(people).to.be.an('array');
      done();
    });
  });

  it('should check the internal sandwich function', function () {
    var data = [];

    expect(db).to.have.property('addSandwich');
    db.addSandwich.should.be.a('function');

    db.addSandwich(data);

    expect(data).to.have.length(1);
    expect(data).to.deep.equal([{ 'name': 'A Large Sandwich', 'class': 'sandwich' }]);
  });

  // an example of a pending test, kind of like a reminder that it should be filled in later
  it('should test the database error function');

  // skip also makes it a pending test case, and the test doesn't execute.
  // from the Mocha documentation:
  //   '[skip] is favoured over commenting out tests which you may forget to uncomment'
  it.skip('should test the error function', function (done) {
    expect(db).to.have.property('getError');
    db.getError.should.be.a('function');

    db.getError(function (err) {
      expect(err).to.be.an.instanceOf(Error);
      expect(err.message).to.equal('database error');

      // getting an error in this case means the test passed, lol
      done();
    });
  });
});
