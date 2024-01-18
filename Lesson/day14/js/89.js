const person = {
    firstName: 'John',
    lastName: 'Smith',
    salary: 4500,
};

const newPerson = person;
newPerson.firstName = 'David';
console.log(person, newPerson); //same persons

//! Object cloning

const person2 = { ...person };
//Object.assign(person) bu da aynisi.copy yapar. Shallow Copy denir.
person2.firstName = 'Suzan';
console.log(person2); //{firstName: 'Suzan', lastName: 'Smith', salary: 4500}

const person3 = { ...person2, birthDate: '11/04/1992', salary: 5000 };
console.log(person3); //{firstName: 'Suzan', lastName: 'Smith', salary: 4500, birthDate: '11/04/1992'}

//! bir obje icinde 2 tane key olmaz o yuzden salary i guncelledi

delete person3.lastName;
console.log(person3); //{firstName: 'Suzan', salary: 5000, birthDate: '11/04/1992'}
