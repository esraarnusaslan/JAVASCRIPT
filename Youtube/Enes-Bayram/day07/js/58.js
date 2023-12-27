// *  ======================== STRING METHODS ========================

let title = 'Modern Web Courses';

//! charAt()
let character = title.charAt(5);
console.log(character); // n

//! concat()
let history = '2022';
let result = title.concat(' ', history);
console.log(result); //Modern Web Courses 2022

//! indexOf()
let index = title.indexOf('W');
console.log(index); // 7 index no su. yoksa -1 verir.

//! lastIndexOf()
let index2 = title.lastIndexOf('Courses');
console.log(index2); // 11 index no sunu verir. kelimenin basladigi index i . yoksa -1 verir.

//! toUpperCase()
let result2 = title.toUpperCase();
console.log(result2); // MODERN WEB COURSES
console.log(title); // Modern Web Courses

//! toLowerCase()
let result3 = title.toLowerCase();
console.log(result3); // modern web courses
console.log(title); // Modern Web Courses

//! trim()
console.log(title.trim()); // sagdaki ve soldaki space leri siler.

//! slice()
console.log(title.slice(7, 10)); // 7.(dahil) den basla 10(dahil degil) a kadar.

//! substring()
console.log(title.substring(7, 10)); // 7.(dahil) den basla 10(dahil degil) a kadar.

//! replace()
console.log(title.replace('Modern', 'Title')); //Title Web Courses

//! split()
console.log(title.split(' ')); //['Modern', 'Web', 'Courses']  space gore ayirip dizi haline getirir.

//! valueOf()
console.log(title.valueOf());

//! startsWith()
console.log(title.startsWith('Mo')); // true.  Mo ile mi basliyor demek.

//! endsWith()
console.log(title.endsWith('Courses')); //true  "Courses" ile mi bitiyor demek. Harf de olur kelime de olur.
