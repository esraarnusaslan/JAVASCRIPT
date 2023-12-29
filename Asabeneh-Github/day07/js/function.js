// Parametresiz fonksiyon giriş yapmaz, bu nedenle parametrelerle bir fonksiyon yapalım
function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo;
    console.log(sum);
}
sumTwoNumbers(10, 20); // fonksiyon çağırımı
// Bir fonksiyon değer döndürmezse veri depolayamaz, bu nedenle değer döndürmelidir.

function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo;
    return sum;
}

console.log(sumTwoNumbers(10, 20));
function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(printFullName('Asabeneh', 'Yetayeh'));

// arguments nesnesine erişelim

function sumAllNums() {
    console.log(arguments);
}

sumAllNums(1, 2, 3, 4);
// Arguments(4)[1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

let number = (function (n) {
    console.log(n * n);
})(2);
// 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function (n) {
    return n * n;
})(10);

console.log(squaredNum);

const changeToUpperCase = (arr) => {
    const newArr = [];
    for (const element of arr) {
        newArr.push(element.toUpperCase());
    }
    return newArr;
};

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
console.log(changeToUpperCase(countries));

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`;
    return message;
}

console.log(greetings());
console.log(greetings('Asabeneh'));

function calculateAge(birthYear, currentYear = 2019) {
    let age = currentYear - birthYear;
    return age;
}

console.log('Age: ', calculateAge(1819));

function weightOfObject(mass, gravity = 9.81) {
    let weight = mass * gravity + ' N'; // değer önce dize olarak değiştirilmelidir
    return weight;
}

console.log('Weight of an object in Newton: ', weightOfObject(100)); // 9.81 Dünya yüzeyinde yerçekimi
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)); // Ay yüzeyinde yerçekimi
