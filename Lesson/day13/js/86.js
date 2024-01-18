const getAverage = (firstName, lastName, ...scores) => {
    const total = scores.reduce((t, x) => t + x, 0);
    const average = total / scores.length;
    return `${firstName} ${lastName}'s average is ${average.toFixed(2)}`;
};

console.log(getAverage('Tom', 'Joe', 12, 10, 23));
