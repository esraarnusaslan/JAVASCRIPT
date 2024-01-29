/* let duration=1000;
function callback(){
    console.log("Hello");
}

setInterval(callback, duration); */

function sayHello() {
    console.log('Hello');
}

const timeOut = setTimeout(sayHello, 2000);
//clearInterval
//clearTimeout

setTimeout(() => {
    clearTimeout(timeOut);
    console.log('end');
}, 5000);

//!forEach
/* let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => (sum += number));
console.log(sum);

const countries = ['Finland', 'France', 'Sweden', 'Canada'];
countries.forEach((country) => console.log(country.toUpperCase()));

//!map
const modifiedArray = countries.map((country) => console.log(country));

const numbers2 = [1, 2, 3, 4, 5];
const numbersSquare = numbers.map((number) => number * number);
console.log(numbersSquare); */

//!filter
const countries = ['Finland', 'France', 'Sweden', 'Canada'];
const countriesContainingLand = countries.filter((country) => {
    return country.includes('land');
});
console.log(countries);
console.log(countriesContainingLand);

//!reduce
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

//! every
const names = ['Tom', 'Bob', 'Jack'];
const areAllStr = names.every((name) => typeof name === 'string');
console.log(areAllStr);

//!some
const some = names.some((name) => typeof name === 'string');
console.log(some);

//!find

const ages = [19, 24, 22, 25, 32, 35, 18];
const age = ages.find((age) => age < 20);
console.log(age); //19 cunku kosulu saglayan ilk elemani dondurur.

//!findIndex
const age2 = ages.findIndex((age) => age < 20);
console.log(age2); //0. index
