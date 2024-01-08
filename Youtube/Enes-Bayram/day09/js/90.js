let numbers = [10, 23, 57, 20];
function add(a, b, c, d) {
    console.log(a + b + c + d);
}
add(numbers[0], numbers[1], numbers[2], numbers[3]); //110

add(...numbers); //! 110

const languages1 = ['Java', 'JavaScript'];

const languages2 = ['Php', 'C#', languages1[0], languages1[1]];
console.log(languages2); //['Php', 'C#', 'Java', 'JavaScript']

const languages3 = ['Php', 'C#', ...languages1];
console.log(languages3); //['Php', 'C#', 'Java', 'JavaScript']

const numbers2 = [2, 3, 4, 5];
let [a, b, ...otherNumbers] = numbers2;
console.log(a, b, otherNumbers); //2 3 (2) [4, 5]

const arr1 = [1, 2, 3, 4];
let arr2 = [];

arr2[0] = arr1[0];
arr2[1] = arr1[1];
arr2[2] = arr1[2];
arr2[3] = arr1[3];

console.log(arr2); //(4) [1, 2, 3, 4]

arr2 = [...arr1];
console.log(arr2); //[1, 2, 3, 4]
