const assert = require('assert');
const { returnThree, reciprocal } = require('../problems/number-fun');

describe('returnThree()', () => {
  it('should return three', () => {
    assert.deepEqual(returnThree(), 3);
  });
});

describe('reciprocal(num)', () => {
  context('for valid arguments', () => {
    it('should take a number and return the reciprocal', () => {
      assert.equal(reciprocal(7), 0.14285714);
      assert.equal(reciprocal(8), 0.125);
      assert.equal(reciprocal(1), 1);
    });
  });
  context('for invalid arguments', () => {
    it('should throw an Error when the number is less than one', () => {
      assert.throws(() => reciprocal(0), TypeError('Out of acceptable range'));
      assert.throws(
        () => reciprocal(-500),
        TypeError('Out of acceptable range')
      );
      assert.throws(() => reciprocal(-1), TypeError('Out of acceptable range'));
    });
    it('should thow an Error when the number is greate than one million', () => {
      assert.throws(
        () => reciprocal(1000001),
        TypeError('Out of acceptable range')
      );
    });
  });
});
