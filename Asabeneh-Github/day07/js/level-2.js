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

//! 3)Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
const arr = [1, 2, 3, 4, 5];
arr.forEach(function (arr) {
    console.log(arr);
});

//! 4) Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

const showDateTime = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const DateTime = `${day}/${month}/${year} ${hours}:${minutes}`;
    return DateTime;
};

console.log(showDateTime()); //30/12/2023 13:12

//! 5) Declare a function name swapValues. This function swaps value of x to y.
const swapValues = (x, y) => {
    let cont = x;
    x = y;
    y = cont;
    return `${x} ${y}`;
};

console.log(swapValues(3, 4)); //4 3

//! 6) Declare a function name reverseArray.
//! It takes array as a parameter and it returns the reverse of the array (don't use method).
const reverseArray = (arr) => {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
};
console.log(reverseArray([1, 2, 3, 4, 5])); //[5, 4, 3, 2, 1]

//! 7) Declare a function name capitalizeArray.
//! It takes array as a parameter and it returns the - capitalized array.

const capitalizeArray = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

console.log(capitalizeArray(['a', 'b', 'c', 'APPLE']));

//! 8) Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const addItem = (...item) => {
    let newArr = [];
    for (let i = 0; i < item.length; i++) {
        newArr.push(item[i]);
    }
    return newArr;
};

console.log(addItem(1, 2, 3)); // [1, 2, 3]

//! 9) Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
const removeItem = (arr, index) => {
    for (let i = 0; i < arr.length; i++) {
        if (i === index) {
            arr.splice(i, 1);
        }
    }
    return arr;
};

console.log(removeItem([1, 2, 3, 4, 5], 0)); //[2, 3, 4, 5]

//! 10) Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

const sumOfNumbers = (arr, num1, num2) => {
    let sum = 0;
    for (let i = num1; i < num2; i++) {
        sum += arr[i];
    }
    return sum;
};

console.log(sumOfNumbers([1, 2, 3, 4, 5], 0, 3)); //6

//! 11) Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

const sumOfOdds = (num1, num2) => {
    let sum = 0;
    for (let i = num1; i < num2; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
};

console.log(sumOfOdds(0, 6)); //1+3+5==9

//! 12) Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

const sumOfEven = (num1, num2) => {
    let sum = 0;
    for (let i = num1; i < num2; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
};

console.log(sumOfEven(0, 6)); //2+4==6

//! 13) Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
const evensAndOdds = (number) => {
    if (number % 2 === 0) {
        console.log(`${number / 2}`);
        console.log(`${number / 2 + 1}`);
    }
};

evensAndOdds(50);

//! 14) Write a function which takes any number of arguments and return the sum of the arguments
const sumOfArgs = (...arguments) => {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
};

console.log(sumOfArgs(1, 2, 3)); //6

//! 15) Writ a function which generates a randomUserIp.

const randomUserIp = () => {
    const randomPart = () => Math.floor(Math.random() * 256);
    const ip = [];
    for (let i = 0; i < 4; i++) {
        ip.push(randomPart());
    }
    const address = ip.join('.');
    return address;
};
console.log(randomUserIp()); //114.216.93.30

//! 16) Write a function which generates a randomMacAddress
const randomMacAddress = () => {
    const randomPart = () => Math.floor(Math.random() * 16).toString(16);
    const macArr = [];
    for (let i = 0; i < 6; i++) {
        macArr.push(randomPart() + randomPart());
    }
    const macAddress = macArr.join(':');
    return macAddress.toUpperCase();
};

console.log(randomMacAddress()); //04:39:8B:09:4C:64

//! 17) Declare a function name randomHexaNumberGenerator.
//!  When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
const randomHexNumberGenerator = () => {
    const hexDigits = '0123456789ABCDEF';
    let hexNum = '#';
    for (let i = 0; i < 7; i++) {
        const random = Math.floor(Math.random() * hexDigits.length);
        hexNum += hexDigits[random];
    }
    return hexNum;
};

console.log(randomHexNumberGenerator()); //#C420B77

//! 18) Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
const userIdGenerator = () => {
    const char =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let userId = '';
    for (let i = 0; i < 7; i++) {
        const random = Math.floor(Math.random() * char.length);
        userId += char[random];
    }
    return userId;
};

console.log(userIdGenerator()); //6o1CxT3
