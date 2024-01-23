const languages = [
    'English',
    'Finnish',
    'Spanish',
    'English',
    'English',
    'French',
    'French',
];

const setOfLanguages = new Set(languages);
console.log(setOfLanguages); //{'English', 'Finnish', 'Spanish', 'French'}

for (const language of setOfLanguages) {
    console.log(language);
}

const companies = new Set();
console.log(companies);

companies.add('Google');
companies.add('Facebook');
companies.add('Amazon');
companies.add('Oracle');
companies.add('Microsoft');

console.log(companies); //{'Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft'}
console.log(companies.size); //5

const toSetFromArray = Array.from(companies);
console.log(toSetFromArray); //['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']

console.log(new Set(toSetFromArray)); //{'Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft'}

console.log(...new Set(toSetFromArray)); //Google Facebook Amazon Oracle Microsoft

setOfCompanies = new Set();
for (const company of toSetFromArray) {
    setOfCompanies.add(company);
}
console.log(setOfCompanies); //{'Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft'}

console.log(companies.delete('Google')); //true
console.log(companies.size); //4

console.log(companies.has('Google')); //false
console.log(companies.has('Facebook')); //true

companies.clear();
console.log(companies.size); //0

console.log(setOfLanguages.size); //4
console.log(setOfLanguages); //{'English', 'Finnish', 'Spanish', 'French'}

const counts = [];

for (const l of setOfLanguages) {
    const filteredLang = languages.filter((lng) => lng === l);
    console.log(filteredLang);
    counts.push({ lang: l, count: filteredLang.length });
}
console.log(counts);

const numbers = [1, 2, 3, 4, 5, 5, 5, 3, 2, 1];
const setOfNumbers = new Set(numbers);
console.log(setOfNumbers); //{1, 2, 3, 4, 5}

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];
console.log(c); //[1, 2, 3, 4, 5, 3, 4, 5, 6]

let newC = new Set(c);
console.log(newC); //{1, 2, 3, 4, 5,6}

//! Kesisim
let newB = new Set(b);

let filteredC = a.filter((num) => newB.has(num));
console.log(filteredC); //[3, 4, 5]


//! fark
let farkC=a.filter((num)=>!newB.has(num))
console.log(farkC);//[1, 2]
