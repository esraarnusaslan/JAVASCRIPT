//! 1) Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser.
//! It doesn’t take any parameter but it takes two inputs using prompt().
//!One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
/* const userIdGeneratedByUser = () => {
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const numOfCharacters = parseInt(prompt('Please enter a character number'));
    const numOfId = parseInt(prompt('Please enter a id number'));
    for (let i = 0; i < numOfId; i++) {
        let userId = '';
        for (let j = 0; j < numOfCharacters; j++) {
            const random = Math.floor(Math.random() * characters.length);
            userId += characters[random];
        }
        console.log(userId);
    }
};

userIdGeneratedByUser(); */

//! 2) Write a function name rgbColorGenerator and it generates rgb colors.
const rgbColorGenerator = () => {
    let color = '';
    for (let i = 0; i < 3; i++) {
        if (i === 2) {
            const random = Math.floor(Math.random() * 255);
            color += random;
        } else {
            const random = Math.floor(Math.random() * 255);
            color += random + ',';
        }
    }
    return `rgb(${color})`;
};
console.log(rgbColorGenerator());

//! 3) Write a function arrayOfHexColors which return any number of hexadecimal colors in an array.

const arrayOfHexColors = () => {
    const hexDigits = '0123456789ABCDEF';
    const arr = [];
    for (let i = 0; i < 6; i++) {
        let color = '#';
        for (let j = 0; j < 6; j++) {
            const random = Math.floor(Math.random() * hexDigits.length);
            color += hexDigits[random];
        }
        arr.push(color);
    }
    return arr;
};

console.log(arrayOfHexColors());

//! 4) Write a function arrayOfRgbColors which return any number of RGB colors in an array.

const arrayOfRgbColors = () => {
    const colorsArr = [];
    for (let i = 0; i < 4; i++) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const color = `rgb(${red},${green},${blue})`;
        colorsArr.push(color);
    }
    return colorsArr;
};

console.log(arrayOfRgbColors());

//! 5) Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
const convertHexaToRgb = (hex) => {
    hex = hex.replace('#', '');
    const red = parseInt(hex.substring(0, 2), 16);
    const green = parseInt(hex.substring(2, 4), 16);
    const blue = parseInt(hex.substring(4, 6), 16);
    const rgb = `rgb(${red},${green},${blue})`;
    return rgb;
};

console.log(convertHexaToRgb('#ee33df'));

//! 6) Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

function convertRgbToHexa(rgb) {
    const regex = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
    const match = rgb.match(regex);

    if (!match) {
        return 'Invalid input';
    }

    const red = parseInt(match[1]);
    const green = parseInt(match[2]);
    const blue = parseInt(match[3]);

    const hexRed = red.toString(16).padStart(2, '0');
    const hexGreen = green.toString(16).padStart(2, '0');
    const hexBlue = blue.toString(16).padStart(2, '0');

    const hexaColor = `#${hexRed}${hexGreen}${hexBlue}`;
    return hexaColor;
}

console.log(convertRgbToHexa('rgb(238, 51, 223)'));

//! 7) Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(numOfColors, type = 'hex') {
    const colorsArray = [];

    for (let i = 0; i < numOfColors; i++) {
        let color = '';

        if (type === 'hex') {
            color = '#';
            for (let j = 0; j < 6; j++) {
                const random = Math.floor(Math.random() * 16).toString(16);
                color += random;
            }
        } else if (type === 'rgb') {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            color = `rgb(${red}, ${green}, ${blue})`;
        } else {
            return "Invalid type. Please choose 'hex' or 'rgb'.";
        }

        colorsArray.push(color);
    }

    return colorsArray;
}

console.log(generateColors(5, 'hex'));
console.log(generateColors(3, 'rgb'));

//! 8) Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
const shuffleArray = (arr) => {
    const copyArr = [...arr];

    for (let i = 0; i < arr.length; i++) {
        const random = Math.floor(Math.random() * arr.length);
        const temp = copyArr[i];
        copyArr[i] = copyArr[random];
        copyArr[random] = temp;
    }
    return copyArr;
};

console.log(shuffleArray([1, 2, 3, 4, 5]));

//! 9)Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

const factorial = (number) => {
    //5!=  1*2*3*4*5
    let factorial = 1;
    for (let i = 1; i < number + 1; i++) {
        factorial *= i;
    }
    return factorial;
};

console.log(factorial(6));

//! 10) Call your function isEmpty, it takes a parameter and it checks if it is empty or not

const isEmpty = (param) => {
    if (param.length === 0) {
        console.log('empty parameter');
    } else {
        console.log('is not empty parameter');
    }
};

isEmpty('');

//! 11) Call your function sum, it takes any number of arguments and it returns the sum.

const sum = (...arguments) => {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
};
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//! 12) Write a function called sumOfArrayItems,
//! it takes an array parameter and return the sum of all the items.
//! Check if all the array items are number types. If not give return reasonable feedback.

const sumOfArrayItems = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) === arr[i]) {
            sum += arr[i];
        } else {
            sum = 0;
            break;
        }
    }

    if (sum != 0) {
        console.log(sum);
    } else {
        console.log('is not a number');
    }
};

sumOfArrayItems([1, 2, '5']);

//! 13) Write a function called average, it takes an array parameter and
//!returns the average of the items. Check if all the array items are number types.
//!If not give return reasonable feedback.

const average = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) === arr[i]) {
            sum += arr[i];
        } else {
            sum = 0;
            break;
        }
    }
    if (sum != 0) {
        const average = sum / arr.length;
        console.log(average);
    } else {
        console.log('is not a number');
    }
};

average([1, 2, '4']);

//! 14) Write a function called modifyArray takes array as parameter
//! and modifies the fifth item of the array and return the array.
//! If the array length is less than five it return 'item not found'.

const modifyArray = (arr) => {
    if (arr.length >= 5) {
        arr[i + 4] = arr[i + 4].toUpperCase();
        return arr;
    } else {
        return 'Not Found';
    }
};

console.log(modifyArray(['Avocado', 'Tomato', 'Potato']));

//! 15) Write a function called isPrime, which checks if a number is prime number.

const isPrime = (number) => {
    for (let i = 2; i < number / 2; i++) {
        if (number % i === 0) {
            return `${number} is not prime`;
            break;
        } else {
            return `${number} is prime`;
        }
    }
};

console.log(isPrime(18));

//! 16) Write a functions which checks if all items are unique in the array.
const arrayUnique = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false;
            }
        }
    }
    return true;
};

console.log(arrayUnique([1, 2, 3, 4, 3]));

//! 17) Write a function which checks if all the items of the array are the same data type.
const arrayType = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (typeof arr[i] !== typeof arr[j]) {
                return false;
            }
        }
    }
    return true;
};

console.log(arrayType([1, 2, 3, 4, undefined]));

//! 18) JavaScript variable name does not support special characters or
//! symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

const isValidVariable = (variableName) => {
    const validPattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

    return validPattern.test(variableName);
};

console.log(isValidVariable('validVariable')); // true
console.log(isValidVariable('_anotherValid123')); // true
console.log(isValidVariable('123invalid')); // false
console.log(isValidVariable('not valid')); // false
console.log(isValidVariable('$valid')); // true

//! 19) Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

const randomNumber = () => {
    let uniqueNumbers = [];
    while (uniqueNumbers.length < 7) {
        let randomNumber = Math.floor(Math.random() * 10);
        if (!uniqueNumbers.includes(randomNumber)) {
            uniqueNumbers.push(randomNumber);
        }
    }
    return uniqueNumbers;
};

console.log(randomNumber());

//! 20) Write a function called reverseCountries, it takes countries array and first
//! it copy the array and returns the reverse of the original array

const reverseCountries = (countries) => {
    const copiedArray = [...countries];
    const reversedArray = copiedArray.reverse();

    return reversedArray;
};

const countries = ['USA', 'Canada', 'UK', 'Australia', 'Germany'];
const reversedCountries = reverseCountries(countries);

console.log('Original Array:', countries);
console.log('Reversed Array:', reversedCountries);
