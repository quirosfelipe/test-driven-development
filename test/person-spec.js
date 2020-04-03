const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const Person = require('../problems/person');

describe('Person', () => {
  let lucy;
  let josh;
  beforeEach('set up person', () => {
    lucy = new Person('Lucy', 24);
    josh = new Person('Josh', 35);
  });
  describe('Person constructor function', () => {
    it('should have a name property', () => {
      expect(lucy).to.have.property('name');
    });
    it('should have an age property', () => {
      expect(lucy).to.have.property('age');
    });
    it('should set the name property', () => {
      expect(lucy.name).to.equal('Lucy');
    });
    it('should set the age property', () => {
      expect(lucy.age).to.equal(24);
    });
  });
  describe('prototype.sayHello', () => {
    it('should return a greeting message', () => {
      expect(lucy.sayHello()).to.eql('Hello, Lucy');
    });
  });
  describe('prototype.visit(otherPerson)', () => {
    it('should say that a person visited the otherPerson', () => {
      expect(lucy.visit(josh)).to.eql(`Lucy visited Josh`);
    });
  });
  describe('prototype.switchVisit(otherPerson)', () => {
    it('should return call the .visit() method', () => {
      const visitSpy = chai.spy.on(josh, 'visit');
      lucy.switchVisit(josh);
      expect(visitSpy).to.have.been.called(1);
    });
    it('should return otherPerson visted Person', () => {
      expect(lucy.switchVisit(josh)).to.eql('Josh visited Lucy');
    });
  });
  describe('.greetAll(people)', () => {
    it('should greet all the people', () => {
      expect(Person.greetAll([lucy, josh])).to.deep.equal([
        'Hello, Lucy',
        'Hello, Josh'
      ]);
    });
    it('should call sayHello() for every person', () => {
      const sayHelloSpy = chai.spy.on(Person.prototype, 'sayHello');
      Person.greetAll([lucy, josh]);
      expect(sayHelloSpy).to.have.been.called(2);
    });
  });
});

