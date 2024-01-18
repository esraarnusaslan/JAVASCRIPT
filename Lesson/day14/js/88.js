let cities = ['London', 'Helsinki', 'Tokyo', 'Brussels', 'Toronto'];

cities = ['Zurich', ...cities, 'Massilia'];
console.log(cities);

let countries1 = ['Germany', 'Denmark', 'Belgium', 'France'];
let countries2 = ['Canada', 'USA', 'Turkey', 'Spain'];

let countries = [...countries1, ...countries2];
console.log(countries); //['Germany', 'Denmark', 'Belgium', 'France', 'Canada', 'USA', 'Turkey', 'Spain']

const people = ['Tom', 'Bob', 'Dark', 'Mary', 'Jerry', 'Tom', 'Bob'];

//! new Set: dizideki tekrar eden elemanlari silip hepsinden tek bir tane olacak object forma donusturur.

const uniquePeople = [...new Set(people)]; //spread olmazsa {} ile sonuc verir.
console.log(uniquePeople);
