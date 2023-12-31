let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

const newText = text.replace(/[.,]/g, '').split(' ');
console.log(newText);
console.log(newText.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

//! Eğer alışveriş sepetine zaten 'Meat' eklenmemişse en başa ekleyin.
const shoppingCartAdded = shoppingCart.unshift('Meat');
console.log(shoppingCart);

//! Eğer alışveriş sepetine zaten 'Sugar' eklenmemişse en sona ekleyin.
const shoppingCartAdded2 = shoppingCart.push('Sugar');
console.log(shoppingCart);

//! Eğer bala alerjiniz varsa 'Honey' elemanını diziden silin.
/* const honeyDeleted=shoppingCart.splice(4,1)
console.log(shoppingCart); */

//! 'Tea' elemanını 'Green Tea' olarak güncelleyin
const teaDeleted = shoppingCart.splice(3, 1, 'Green Tea');
console.log(shoppingCart);

const countries = [
    'Albania',

    'Bolivia',

    'Canada',

    'Denmark',

    'Ethiopia',

    'Finland',

    'Germany',

    'Hungary',

    'Ireland',

    'Japan',

    'Kenya',
];

//! countries dizisinde 'Ethiopia' olup olmadığını
//!  kontrol edin. Eğer varsa 'ETHIOPIA' yazdırın. eğer yoksa bunu countries dizisine ekleyin.

let isExist = false;

for (let i = 0; i < countries.length; i++) {
    if (countries[i].toUpperCase() === 'ESRA') {
        isExist = true;
        console.log('ESRA');
        break;
    }
}
if (!isExist) {
    countries.push('Esra');
    console.log(countries);
}

//! countries array dizisinden ilk 10 ülkeyi dilimleyin ( Slice edin )
const sliceArray = countries.slice(0, 10);
console.log(sliceArray);

//! countries array dizisinden ortadaki ülkeleri bulun.
console.log(countries); //['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya', 'Esra']

if (countries.length % 2 == 0) {
    console.log(countries[countries.length / 2]);
    console.log(countries[countries.length / 2 + 1]);
} else {
    console.log(countries[countries.length]);
}

//! countries dizisini çift ise iki eşit diziye bölün. countries dizisi çift değilse, ilk yarı için bir ülke fazla olarak bölün
let firstArr = [];
let secondArr = [];

if (countries.length % 2 === 0) {
    const index = countries.length / 2;
    firstArr = countries.slice(0, index);
    secondArr = countries.slice(index);
} else {
    const index = Math.ceil(countries.length / 2);
    firstArr = countries.slice(0, index);
    secondArr = countries.slice(index);
}
console.log(firstArr);
console.log(secondArr);

const webTechs = [
    'HTML',

    'CSS',

    'JavaScript',

    'React',

    'Redux',

    'Node',

    'MongoDB',
];

//! webTechs dizisinde Sass olup olmadığını kontrol edin eğer varsa
//! 'Sass is a CSS preprocess' yazdırın. Eğer yoksa diziye Sass elemanını ekleyip diziyi yazdırın

let isExistSass = false;

for (let i = 0; i < webTechs.length; i++) {
    if (webTechs[i].toLowerCase().includes('sass')) {
        isExistSass = true;
        console.log('Sass is a Css preprocessor');
        break;
    }
}

if (!isExistSass) {
    webTechs.push('Sass');
    console.log(webTechs);
}

//! Aşağıdaki iki değişkeni birleştirin ve bir fullStack değişkeninde atayın.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
