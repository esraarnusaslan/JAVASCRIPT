const order = (cb) => {
    setTimeout(() => {
        cb('Fast Food');
    }, 5000);
};

console.log('Go to cinema');
console.log('Play bowling');
console.log('You are hungry');
order((food) => {
    console.log(`Eat ${food}`);
});
console.log('Take shoes');
console.log('Find an empty table');
