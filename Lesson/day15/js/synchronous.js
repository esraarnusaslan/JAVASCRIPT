for (let i = 0; i < 15; i++) {
    console.log(`Hello ${i}`);
}

setTimeout(() => {
    console.log('Hello async');
}, 1000);

for (let i = 0; i < 15; i++) {
    console.log(`Hi ${i}`);
}

const getData = () => {
    setTimeout(() => {
        console.log('Data 2'); //3.
    });
};
console.log('Data 1'); //1.
getData();
console.log('Data 3'); //2.
