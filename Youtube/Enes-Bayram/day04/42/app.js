//The sum of the digits of a number gives the Armstrong number.

let number = prompt('Please enter a number'); //There are no string methods in number
let sum = 0;

for (let i = 0; i < number.length; i++) {
    sum += number.charAt(i) ** number.length;
}

if (Number(number) == sum) {
    alert('Armstrong number');
} else {
    alert('Is not Armstrong number');
}
