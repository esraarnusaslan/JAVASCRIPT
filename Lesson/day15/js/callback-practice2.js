const sum = (a, b, cb) => {
    setTimeout(() => {
        cb(a-b);
    }, 3000);
};

console.log('Hello');
sum(80, 30, (result) => {
    console.log(result);
});
console.log('End');
