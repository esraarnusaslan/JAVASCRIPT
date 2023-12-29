//! 1) Declare a function fullName and it print out your full name.
//! 2) Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(name, lastName) {
    return `${name} ${lastName}`;
}
console.log(fullName('Esra', 'Arnus')); //Esra Arnus

//! 3) Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(3, 5)); //8

//! 4) An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
    return length * width;
}
console.log(areaOfRectangle(4, 6)); // 24

//! 5)A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
}

console.log(perimeterOfRectangle(3, 4));

//! 6)A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
const volumeOfRectPrism = (length, width, height) => {
    return length * width * height;
};

console.log(volumeOfRectPrism(3, 4, 5));

//! 7)Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const areaOfCircle = (π, r) => {
    return π * r * r;
};

console.log(areaOfCircle(3, 4)); //48

//! 8) Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
const circumOfCircle = (π, r) => {
    console.log(2 * π * r);
};

circumOfCircle(3, 4); //24

//! 9)Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
const densities = (mass, volume) => {
    return mass / volume;
};

console.log(densities(40, 5)); //8

//! 10)Speed is calculated by dividing the total distance covered by a moving object
//! divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
// h=m/s

const speed = (m, s) => {
    return m / s;
};

console.log(speed(30, 2)); //15

//! 11) Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const weight = (mass, gravity) => {
    return mass * gravity;
};

console.log(weight(10, 2)); //20

//! 12) Temperature in oC can be converted to oF using this formula:
//! oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
const convertCelsiusToFahrenheit = (oc) => {
    return (oc * 9) / 5 + 32;
};
console.log(convertCelsiusToFahrenheit(78)); //172.4

//!13) Body mass index(BMI) is calculated as follows:
//!  bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi.
//! BMI is used to broadly define different weight groups in adults 20 years old or older.
//! Check if a person is underweight, normal, overweight or obese based the information given below.

/* The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more */

const bmi = (kg, m) => {
    const bmiValue = kg / m ** 2;
    if (bmiValue < 18.5) {
        console.log('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        console.log('Normal weight');
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        console.log('Overweight');
    } else {
        console.log('obese');
    }
    return bmiValue;
};

console.log(bmi(60, 1.65)); //normal weight

//! 14)Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
const checkSeason = (month) => {
    let season;
    switch (month.toLowerCase()) {
        case 'december':
        case 'january':
        case 'february':
            season = 'Winter';
            break;
        case 'match':
        case 'april':
        case 'may':
            season = 'Spring';
            break;
        case 'june':
        case 'july':
        case 'august':
            season = 'Summer';
            break;
        case 'september':
        case 'october':
        case 'november':
            season = 'Autumn';
            break;

        default:
            console.log('Please enter a valid month name');
            break;
    }

    return season;
};
console.log(checkSeason('june'));

//!15)Math.max returns its largest argument.
//! Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
const max = (number1, number2, number3) => {
    let maxNum = number1;
    if (number2 > number1 && number2 > number3) {
        maxNum = number2;
    } else if (number3 > number1) {
        maxNum = number3;
    }
    return maxNum;
};

console.log(max(-4, 2, 3));
