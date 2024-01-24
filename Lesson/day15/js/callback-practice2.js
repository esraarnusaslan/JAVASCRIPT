const sum = (a, b, cb) => {
    setTimeout(() => {
        const result = a - b;
        cb(result);
    }, 3000);
};

console.log('Hello');
sum(80, 30, (result) => {
    console.log(result);
});
console.log('End');
