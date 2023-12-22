let number = Number(prompt('Please enter a number'));

let sum = true;
for (let i = 2; i <= Math.floor(number / 2); i++) {
    if (number % i == 0) {
        sum = false;
        break; // is not a prime number
    }
}

if (sum) {
    alert('a prime number');
} else {
    alert('is not a prime number');
}
