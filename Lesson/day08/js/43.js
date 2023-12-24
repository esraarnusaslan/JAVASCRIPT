const car = {
    //object
    brand: 'Ford', //property:value
    model: 'Mustang',
    color: 'black',
    year: '2009',
    engine: {
        cylinders: 4,
        size: 2.5,
        type: 'V8',
        transmission: 'manuel',
    },
    start: () => {
        //method
        console.log('start');
    },
};

console.log(car, typeof car);
console.log(car.engine.cylinders);

car.year = '2023';
console.log(car.year);

car.start();

// ! object dizi haline getirilir. Amac object elemanlarinin bir dizi icinde ITERATE edilmesidir.
console.log(Object.entries(car));
console.log(Object.keys(car));
console.log(Object.values(car));
