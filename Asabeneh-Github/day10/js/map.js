const map = new Map();
console.log(map);

countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
];

const myMap = new Map(countries);
console.log(myMap); //{'Finland' => 'Helsinki', 'Sweden' => 'Stockholm', 'Norway' => 'Oslo'}
console.log(myMap.size); //3

const countriesMap = new Map();

const key = ['Finland', 'Helsinki'];
countriesMap.set(key, ['value']);

countriesMap.set('Sweden', 'Stockholm');

console.log(countriesMap); //{Array(2) => Array(1), 'Sweden' => 'Stockholm'}

console.log(countriesMap.get(key)); //value

console.log(countriesMap.get('Sweden')); //Stockholm

console.log(countriesMap.has(key)); //true
console.log(countriesMap.has('Finland')); //false

for (const country of countriesMap) {
    console.log(country); //['Sweden', 'Stockholm']    [Array(2), Array(1)]
}

for (const [country, city] of countriesMap) {
    console.log(country, city); //['Finland', 'Helsinki'] ['value']     Sweden Stockholm
}
