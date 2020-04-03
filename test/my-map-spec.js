const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const myMap = require('../problems/my-map');

describe('myMap(arr,cb)', () => {
  let array;
  let array2;
  beforeEach(() => {
    array = [1, 2, 3];
    array2 = ['hello', 'world'];
  });
  it('returns an array where elements were passed through a callback', () => {
    const test = myMap(array, num => {
      return num * 2;
    });
    const expected = [2, 4, 6];

    const test2 = myMap(array2, word => {
      return word.toUpperCase();
    });
    const expected2 = ['HELLO', 'WORLD'];

    expect(test).to.eql(expected);
    expect(test2).to.eql(expected2);
  });
  it('should not mutate the passed in array', () => {
    const test3 = myMap(array, (num, i, array) => {
      return array;
    });
    expect(test3[array.length - 1]).to.deep.equal([1, 2, 3]);
  });
  it('should not call the Array#map method', () => {
    const mapSpy = chai.spy.on(array, 'map');

    myMap(array, num => {
      return num * 2;
    });

    expect(mapSpy).to.not.have.been.called();
  });
  it('should call the callback for each element in the array once', () => {
    const callback = num => {
      return num * 2;
    };
    const mapSpy = chai.spy(callback);

    myMap(array, mapSpy);

    expect(mapSpy).to.have.been.called(array.length);
  });
});
