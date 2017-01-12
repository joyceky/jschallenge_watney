const watney = require('../watneyDecoder.js');
const expect = require('chai').expect;

describe('Decoder', function() {
    it('Should exist', function() {
        expect(typeof watney.decode).to.equal('function');
    });
    it('Should Decode Correctly', function() {
        expect(watney.decode('4d,61,72,73,20,77,69,6c,6c,20,63,6f,6d,65,20,74,6f,20,66,65,61,72,20,6d,79,20,62,6f,74,61,6e,79,20,70,6f,77,65,72,73,2e')).to.equal('Mars will come to fear my botany powers.');
        expect(watney.decode('4d,61,72,6b,20,57,61,74,6e,65,79,3a,20,53,70,61,63,65,20,50,69,72,61,74,65,2e')).to.equal('Mark Watney: Space Pirate.');
    });
})