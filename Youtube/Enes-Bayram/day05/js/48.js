function isPerfectNumber(number) {
    let sum = 0;
    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            sum += i;
        }
    }
    sum += 1 + number;

    if (sum == number * 2) {
        console.log(` ${number} is perfect number`);
    } else {
        console.log(`${number} is not perfect number`);
    }
}

isPerfectNumber(6);
