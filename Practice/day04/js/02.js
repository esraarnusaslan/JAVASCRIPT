/* //const arr = [-2, 34, 89, -234, 89, -659, 23];

let number = 0;
let sum = 0;

//! for i
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 0) {
        number++;
        sum += arr[i];
    }
}
//console.log(number, sum);

//! for of
for (const i of arr) {
    if (arr[i] > 0 && arr[i] % 2 === 0) {
        number++;
        sum += arr[i];
    }
}

console.log(number, sum);

const countries = ['Spain', 'England', 'Germany', 'Turkey', 'Canada', 'Sweden'];
const capital = ['Madrid', 'London', 'Berlin', 'Ankara', 'Ottawa', 'Stockholm'];

const combinedArr = [];

//! for i
for (const i in countries) {
    combinedArr[i] = countries[i] + '-' + capital[i];
}

console.log(combinedArr);

let countries2 = ['Spain', 'England', 'Germany', 'Turkey', 'Canada', 'Sweden'];

//! sort()
countries2 = countries2.sort((a, b) => a.localeCompare(b));
console.log(countries2);

let newCountries2 = [];
for (let item of countries2) {
    item = item.substring(0, 3).toLocaleUpperCase() + item.substring(3);
    newCountries2.push(item);
}

console.log(newCountries2); */

/* //!for each
const arr = [-2, 34, 89, -234, 89, -659, 23];

let newArr = [];

arr.forEach((item, index) => {
    newArr[index] = Math.abs(item * 2);
});
console.log(newArr.sort((a, b) => b - a)); */ //big -> small

//! filter
const names = ['Tom', 'Bob', 'Marry', 'Job', 'Maggie'];
let newName = [];

const filter = (length) => {
    newName = names.filter((name) => name.length === length);
    return newName;
};

console.log(filter(3));
