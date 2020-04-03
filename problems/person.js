class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    return `Hello, ${this.name}`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }
  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }
  static greetAll(people) {
    return people.map(person => {
      return person.sayHello();
    });
  }
}

module.exports = Person;
