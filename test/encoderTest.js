const watney = require('../watneyDecoder.js');
const expect = require('chai').expect;

describe('Encoder', function() {
    it('Should exist', function() {
        expect(typeof watney.encode).to.equal('function');
    });
    it('Should Encode Correctly', function () {
        expect(watney.encode('In your face, Neil Armstrong!')).to.equal('49,6e,20,79,6f,75,72,20,66,61,63,65,2c,20,4e,65,69,6c,20,41,72,6d,73,74,72,6f,6e,67,21');
        expect(watney.encode('So I\'m going to be taking a craft over in international waters without permission, which by definition... makes me a pirate.')).to.equal('53,6f,20,49,27,6d,20,67,6f,69,6e,67,20,74,6f,20,62,65,20,74,61,6b,69,6e,67,20,61,20,63,72,61,66,74,20,6f,76,65,72,20,69,6e,20,69,6e,74,65,72,6e,61,74,69,6f,6e,61,6c,20,77,61,74,65,72,73,20,77,69,74,68,6f,75,74,20,70,65,72,6d,69,73,73,69,6f,6e,2c,20,77,68,69,63,68,20,62,79,20,64,65,66,69,6e,69,74,69,6f,6e,2e,2e,2e,20,6d,61,6b,65,73,20,6d,65,20,61,20,70,69,72,61,74,65,2e');
    });
})