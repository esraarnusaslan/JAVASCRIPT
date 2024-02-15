class Mathematics {
    add(a, b) {
        console.log(a + b);
    }
    static subtract(a, b) {
        console.log(a - b);
    }
    plenty(a, b) {
        console.log(a / b);
    }
    multiply(a, b) {
        console.log(a * b);
    }
}

//! this is non static
const math = new Mathematics();
math.add(100, 200);

//! this is static
Mathematics.subtract(10, 3);
