const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const reverseString = require('../problems/reverse-string');

describe('reverseString()', () => {
  it('should return a reverse string', () => {
    const expected = 'nuf';
    const reversed = reverseString('fun');
    expect(reversed).to.equal(expected);
  });

  it('should throw an error if invoked with an argument that is not a string', () => {
    expect(() => reverseString(42)).to.throw(TypeError);
    expect(() => reverseString(undefined)).to.throw(TypeError);
    expect(() => reverseString([42, 55, 60])).to.throw(TypeError);
    expect(() => reverseString(true)).to.throw(TypeError);
  });
});
