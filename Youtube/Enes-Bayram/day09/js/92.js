const map1 = new Map();

//!set()
map1.set(1, 'Tom');
map1.set(true, 5);
map1.set(false, '3');
map1.set([1, 2, 3], { firstName: 'Tom', lastName: 'Doe' });
map1.set(34, 'ABD');
map1.set(32, 'England');
map1.set(30, 'Canada');

//!!
map1.set([1,2,3],"tom")
console.log(map1.get([1,2,3]));//undefined 

//!get
console.log(map1.get(34)); //ABD
console.log(map1.get('30')); //undefined

console.log(map1.get(23)); //undefined
const value = map1.get(32);
console.log(value); //England

let value2;
//value2=map1.size//7

//! delete
//value2=map1.delete(32)//true.Varsa true yoksa false doner.
//console.log(map1.size);

//! has
//console.log(map1.has(32)); //varsa true yoksa false doner. Var mi yok mu diye soruyor

//! for of
for (let [key, value] of map1) {
    console.log(key, value);
}

//! map i array a cevirme
const keys = Array.from(map1.keys());
console.log(keys); //MapIterator{1, true, false, Array(3), 34,…}.Array.from yapmadan once boyleydi.clg hata veriyordu.

//! for each
keys.forEach((key) => {
    console.log(key, map1.get(key));
}); //yukarisi array olmazsa hata veriyor.

//! keys()
for (const key of map1.keys()) {
    console.log(key);
}

//! values()
for (const value of map1.values()) {
    console.log(value);
}

//! map ten array e cevirme
const array = Array.from(map1);
console.log(map1); //Map(7){1 => 'Tom', true => 5, false => '3', Array(3) => {…}, 34 => 'ABD',…}
console.log(array); //(7)[Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

array.forEach((value) => {
    console.log(value);
});

//! array den map e cevirme
let arr = [
    [34, 'istanbul'],
    [35, 'izmir'],
];

const newMyMap = new Map(arr);
console.log(newMyMap); //Map(2) {34 => 'istanbul', 35 => 'izmir'}

const myArray = Array.from(newMyMap);
console.log(myArray); //[Array(2), Array(2)]
