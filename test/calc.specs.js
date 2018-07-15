const expect = require('chai').expect;
const {calculator} = require('../calc');


describe('calculator', () => {
	it('can add', () => {
		expect(calculator.add(2,3)).to.eql(5);
		expect(calculator.add(6,43)).to.eql(49);
	})

	it('can subtract', () => {
		expect(calculator.subtract(8,3)).to.eql(5);
		expect(calculator.subtract(65,43)).to.eql(22);
	})

	it('can multiply', () => {
		expect(calculator.multiply(2,3)).to.eql(6);
		expect(calculator.multiply(6,10)).to.eql(60);
	})
})