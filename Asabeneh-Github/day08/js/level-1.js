//! 1) Create an empty object called dog
//! 2) Print the the dog object on the console

//! 3)Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
const dog = {};
console.log(dog);

dog.name = 'Dog';
dog.legs = 4;
dog.color = 'black';
dog.age = 5;
dog.bark = function () {
    return 'woof woof';
};
console.log(dog);
console.log(dog.bark());

//! 4) Get name, legs, color, age and bark value from the dog object
console.log(
    'name:' + dog.name,
    '\n' + 'color:' + dog.color,
    '\n' + 'age:' + dog.age,
    '\n' + 'bark:' + dog.bark(),
    '\n' + 'legs:' + dog.legs
);

//! 5) Set new properties the dog object: breed, getDogInfo
dog.breed = 'bre';
dog.getDogInfo = function () {
    return `${this.breed}`;
};

console.log(dog);
console.log(dog.getDogInfo());
