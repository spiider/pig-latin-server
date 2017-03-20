import chai from 'chai';
import { translate } from '../src/lib/translate'
const should = chai.should();

describe('lib:translate', function () {
  describe('# translate()', function() {
    // Words that start with a vowel (A, E, I, O, U) simply have "WAY" appended to the end of the word.
    it('start with a vowel append "WAY"', function(done) {
      translate('ello').should.equal('elloway');
      translate('yellow').should.equal('ellowyay') // TODO: ellowyay or elloyay ?!
      done();
    });

    it('y as a vowel', function(done) {
      translate('style').should.equal('ylestay');
      done();
    });

    it('Correctly translates "qu"', function(done) {
      translate('quay').should.equal('ayquay');
      translate('equivoque').should.equal('equivoqueway');
      done();
    })
  });
});
