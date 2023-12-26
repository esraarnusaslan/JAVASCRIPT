let cars = ['bmw', 'toyota', 'renault', 'porsche', 'mercedes'];
console.log(cars); //5

//! PUSH
let carsPush = cars.push('mustang');
console.log(cars); //['bmw', 'toyota', 'renault', 'porsche', 'mercedes' ,"mustang"] mustang added
console.log(cars.length); //6
console.log(carsPush); // * (6) Does not freeze the added element

//! UNSHIFT
let carsUnshift = cars.unshift('hyundai');
console.log(cars); //["hyundai",'bmw', 'toyota', 'renault', 'porsche', 'mercedes' ,"mustang"] hyundai added
console.log(cars.length); //7
console.log(carsUnshift); // * (7)  Does not freeze the added element

//! POP
let carsPop = cars.pop();
console.log(cars); //["hyundai",'bmw', 'toyota', 'renault', 'porsche', 'mercedes'] mustang deleted
console.log(cars.length); //6
console.log(carsPop); //*  (mustang) freezes the added element

//! SHIFT
let carsShift = cars.shift();
console.log(cars); //['bmw', 'toyota', 'renault', 'porsche', 'mercedes'] hyundai deleted
console.log(cars.length); //5
console.log(carsShift); // * (hyundai )freezes the added element

//! SPLICE
console.log(cars); //['bmw', 'toyota', 'renault', 'porsche', 'mercedes']
//cars.splice(0, 0, 'hyundai');
//console.log(cars); //["hyundai",'bmw', 'toyota', 'renault', 'porsche', 'mercedes']
//cars.splice(2, 0, 'hyundai'); // 2. indexe 0 silerek hyundai ekle demek
//console.log(cars); //['bmw', 'toyota', 'hyundai', 'renault', 'porsche', 'mercedes']
//cars.splice(1, 4); // * 1. den basla 2 tane sil. index ile degil.
//console.log(cars); //['bmw', 'mercedes']

//cars.splice(2, 2, 'hyundai'); // 2 den basla 2 tane sil yerine hyundai yaz. index degil
//console.log(cars);

//! TOSTRING
//let carsToString=cars.toString();
//console.log(carsToString);// * bmw,toyota,renault,porsche,mercedes

//! JOIN
///console.log(cars);
//let carsJoin=cars.join("-");
//console.log(carsJoin);// * bmw-toyota-renault-porsche-mercedes

//! CONCAT
//let cars2 = ['hyundai', 'tofas'];
//let concatCar=cars.concat(cars2);
//console.log(concatCar);// * ['bmw', 'toyota', 'renault', 'porsche', 'mercedes', 'hyundai', 'tofas']

//! SLICE
console.log(cars); //['bmw', 'toyota', 'renault', 'porsche', 'mercedes']
//let carSlice=cars.slice(2);// 2. den sonra hepsini getir dedik. index degil
//console.log(carSlice);// * ['renault', 'porsche', 'mercedes']

//! REVERSE
//let carsReverse = cars.reverse();
//console.log(carsReverse); // * ['mercedes', 'porsche', 'renault', 'toyota', 'bmw']

//! SPLIT
//let names = 'tom, john, fred';
//console.log(names); // tom, john, fred
//let namesSplit = names.split(',');
//console.log(namesSplit); // * ['tom', ' john', ' fred']

//! INDEXOF
console.log(cars); //['bmw', 'toyota', 'renault', 'porsche', 'mercedes']
let carsIndexOf = cars.indexOf('toyota');
console.log(carsIndexOf); // * kacinci indexte oldugunu donduruyor.yoksa -1 donuyor.

//! INCLUDES
let result = cars.includes('opel');
console.log(result); // * string dizide varsa true yoksa false donduruyor.
