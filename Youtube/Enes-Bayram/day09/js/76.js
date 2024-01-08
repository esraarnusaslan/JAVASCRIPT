//tarayicinin depolama alanidir.

//local storage de datalar silinmez.
//session da silinir.

//! -----------session storage--------------

console.log(window); //session ve locak storage window icindedir.

//! Add Value
sessionStorage.setItem('hello', 'world');
sessionStorage.setItem('216', 'tom');
sessionStorage.setItem('214', 'tom');
sessionStorage.setItem(34, 43534);

//! Remove Value
sessionStorage.removeItem('hello', 'world');

//! Get Value
let value = sessionStorage.getItem('216');
let value2 = sessionStorage.getItem(34);

console.log(value2); //43534
console.log(typeof value2); //string

if (value === null) {
    console.log('value is null');
} else {
    console.log(value); //tom
}

//! Clear All
sessionStorage.clear();

//! Session Storage Array
let names = ['Tom', 'Jack', 'Bob', 'Mary'];
//sessionStorage.setItem('names', names); //tom,jack,bob,mary--string gelir
sessionStorage.setItem('names', JSON.stringify(names)); //["Tom","Jack","Bob","Mary"]--array gelir

let value3 = sessionStorage.getItem('names');
console.log(value3); //* ["Tom","Jack","Bob","Mary"]--bu string olarak geliyor
console.log(typeof value3); //string

let value4 = JSON.parse(sessionStorage.getItem('names'));
console.log(value4); //['Tom', 'Jack', 'Bob', 'Mary']
console.log(typeof value4); //object

//! ------------Local Storage------------

localStorage.setItem('1', '34');
localStorage.setItem(2, 45);
let value5 = localStorage.getItem(2, 45);
console.log(value5);
console.log(typeof value5); //string

//localStorage.clear();
