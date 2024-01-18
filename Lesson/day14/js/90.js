const person = {
    firstName: 'John',
    lastName: 'Smith',
    salary: 4500,
    birthDate: '11.04.1992',
};

//Tradition
const message1 = `The person named ${person.firstName} ${person.lastName} was born on ${person.birthDate} and his salary is ${person.salary} $ per month.`;
console.log(message1);

//! Destructuring
const { firstName, lastName, salary, birthDate } = person;
/* const firstName = person.firstName;
const lastName = person.firstName;
const salary = person.firstName;
const birthDate = person.firstName; */

const message2 = `The person named ${firstName} ${lastName} was born on ${birthDate} and his salary is ${salary} $ per month.`;
console.log(message2);
