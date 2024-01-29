const callback = (n) => {
    return n ** 2;
};

console.log(callback(2));

function cube(callback, n) {
    return callback(n) * n;
}

console.log(cube(callback, 3));

const a = (s1) => {
    const b = (s2) => {
        const c = (s3) => {
            return s1 + s2 + s3;
        };
        return c;
    };
    return b;
};

console.log(a(5)(10)(20));
