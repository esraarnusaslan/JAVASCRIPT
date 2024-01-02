const cars = ['Porsche', 'Ferrari', 'Mustang', 'Tesla'];
console.log(cars);
let arrLength = cars.push('Lamborghini');
console.log(cars, arrLength); // ! en sona lamborghini yi ekledi

let deletedItem = cars.pop();
console.log(cars, deletedItem); // ! son elemani siler. Silinen elemani doner.

deletedItem = cars.shift();
console.log(cars, deletedItem); // ! ilk elemani siler. Silinen elemani doner.

arrLength = cars.unshift('Lamborghini');
console.log(cars, arrLength); // ! push ile ayni sadece bu elemani en basa koyar.

cars.sort(); //  mutator method oldugu icin mevcut diziyi saklar
console.log(cars); // ! alfabetik siralar.

const newArr = cars.toSorted(); //mutator(dizi icerigini degistirmeyi saglayan) olmadigi icin mevcut diziyi bozmaz yeni bir dizi olusturup siralamayi onda olusturur.
console.log(newArr);

cars.reverse();
console.log(cars); // ! diziyi tersten siralar.

console.log(cars);//['Tesla', 'Mustang', 'Lamborghini', 'Ferrari']

/* console.log(cars.splice(0, 3));
console.log(cars);//Ferrari */

console.log(cars.slice(0,2));//['Tesla', 'Mustang'

