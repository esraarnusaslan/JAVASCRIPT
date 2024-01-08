/* let langs = ['C#', 'Java', 'JavaScript', 'Python'];
let lang1, lang2, lang3, lang4;

lang1 = langs[0];
lang2 = langs[1];
lang3 = langs[2];
lang4 = langs[3];

[lang1, lang2, lang3, lang4] = langs;

console.log(lang1, lang2, lang3, lang4);//C# Java JavaScript Python
console.log(lang1, lang2, lang3, lang4);//C# Java JavaScript Python */

const calculate = (a, b) => {
    const total = a + b;
    const remove = a - b;
    const multiply = a * b;
    const split = a / b;

    const arr = [total, remove, multiply, split];
    return arr;
};

console.log(calculate(5, 2)); //[7, 3, 10, 2.5]

let [a, b, c, d] = calculate(10, 2);
console.log(a, b, c, d); //12 8 20 5

const person = {
    firstName: 'John',
    lastName: 'Doe',
    salary: 5000,
    age: 32,
};

//let names, lastName, salary, age;

/* names = person.firstName;
lastName = person.lastName;
salary = person.salary;
age = person.age;
 */
//console.log(names, lastName, salary, age);

let { firstName: names, lastName, salary, age } = person;
//console.log(names, lastName, salary, age);//John Doe 5000 32
//! names undefined verir cunku objenin keyleri ile buradaki keylerin ayni olmasi lazim
// ! firstName:names eger tanimladigim degiskenle olamsini istiyorsam : ile yapmam lazim
console.log(firstName, lastName, salary, age); //John Doe 5000 32
