const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];

const newSet = new Set();
for (let i = 0; i < 11; i++) {
    newSet.add(i);
}
console.log(newSet);

newSet.delete(1);
console.log(newSet);

/* newSet.clear();
console.log(newSet); */

const arr = [1, 2, 3];
console.log(arr.keys());

const names = new Set(['Tom', 'Jerry', 'Bob', 'Mary', 'Hulk']);
console.log(names);

const country = ['Finland', 'Germany', 'Sweden', 'Norway'];
const countriesSet = new Set(country);
console.log(countriesSet);

let sum = 0;
for (const characterCountry of countriesSet) {
    sum += characterCountry.length;
}
console.log(sum);
