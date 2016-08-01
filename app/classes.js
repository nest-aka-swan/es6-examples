/**
 * Created by Lebedev on 01.08.2016.
 */
class Person {
    constructor(firstname = 'John', lastname = 'Doe') { // default args
        this._firstname = firstname;
        this._lastname = lastname;
    }

    // setter and getter
    set fullName(name) { [this._firstname, this._lastname] = name.split(' '); } // decomposition
    get fullName() { return `${this._firstname} ${this._lastname}` } // interpolation

    // TODO static property
}

class Student extends Person {
    constructor(firstname, lastname, university) {
        super(firstname, lastname);
        this.university = university;
    }
}

const person = new Person();
console.log(person.fullName);

person.fullName = 'Jane Doe';
console.log(person.fullName);

const student = new Student('Jane', 'Doe', 'UrFU');
console.log(student.university);