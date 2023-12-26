const numbers = [2, 35, 32, 1, 9085943, 35345, 67, 'ali'];
console.log(numbers[756]);
//ArrayIndexOutOfBoundException: bu hata diger dillerde index yoksa verir.
// js de undefined verir.
numbers[3] = 'mehmet';
console.log(numbers);

const names = ['melissa', 'john', 'alice', 'Joey'];
names[2] = '2';
console.log(names);

let x = [23, 'esra', 5.7, true, null, undefined];
console.log(x[4]);
console.log(typeof x); //object

//let name = new Array('tom', 'john');

//foreach is used in arrays

let name2 = ['tom', 'john', 'alice', 'Joey'];
name2.forEach(function (name) {
    console.log(name);
});
