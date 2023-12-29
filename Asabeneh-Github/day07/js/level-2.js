//! 1) Linear equation is calculated as follows:
//!  ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
//2x+5y+8=0 ==> y(0,-1.6)  x(-4,0)

const solveLinEquation = (a, b, c) => {
    // x=0;
    const y = -c / b;
    //y=0;
    const x = -c / a;
    console.log(`y(${0},${y}) x(${x},${0})`);
};

solveLinEquation(2, 5, 8); //y(0,-1.6) x(-4,0)

//! 2) Quadratic equation is calculated as follows:
//! ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

const solveQuadEquation = (a = 0, b = 0, c = 0) => {
    const discriminant = b ** 2 - 4 * a * c;
    let x1, x2;
    let number = false;

    if (number == a && number == b && number == c) {
        return '0';
    }

    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return { x1, x2 };
    } else if (discriminant === 0) {
        x1 = -b / (2 * a);
        return { x1 };
    } else {
        const real = -b / (2 * a);
        const real2 = Math.sqrt(Math.abs(discriminant)) / (2 * a);
        return { x1: `${real}+${real2}`, x2: `${real}-${real2}` };
    }
};
console.log(solveQuadEquation(2, -6, 4)); //2,1
console.log(solveQuadEquation()); //0
console.log(solveQuadEquation(1, 4, 4)); //-2
console.log(solveQuadEquation(1, -1, -2)); // {2, -1}
console.log(solveQuadEquation(1, 7, 12)); // {-3, -4}
console.log(solveQuadEquation(1, 0, -4)); //{2, -2}
console.log(solveQuadEquation(1, -1, 0)); //{1, 0}
