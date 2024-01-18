const sum1 = (a, b) => {
    return a + b;
};

console.log(sum1(3, 4));

//REST

const sum2 = (...number) => {
    const total = number.reduce((t, x) => t + x, 0);
    return total;
};

console.log(sum2(1, 2, 3, 4));//10
console.log(sum2(1, 2, 3, 4, 5, 6));//21
