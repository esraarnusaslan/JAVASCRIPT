const person = {
    firstName: 'John',
    lastName: 'Smith',
    salary: 4500,
    birthDate: '11.04.1992',
};

const sayHello1 = (firstName, lastName) => {
    alert(`Hello ${firstName} ${lastName}`);
};

sayHello1(person.firstName, person.lastName);

//! destructuring
const sayHello2 = ({ firstName, lastName }) => {
    alert(`Hello ${firstName} ${lastName}`);
};

sayHello2(person);
