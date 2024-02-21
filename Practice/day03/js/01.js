let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');
const message = document.querySelector('#msg');

document.querySelector('#calculate').addEventListener('click', () => {
    let number1Value = Number(number1.value);
    let number2Value = Number(number2.value);

    let sum = 0;
    let counter = 0;

    if (number1Value > number2Value) {
        let temp = number1Value;
        number1Value = number2Value;
        number2Value = temp;
    }

    for (let i = number1Value; i <= number2Value; i++) {
        if (i % 4 == 0 && i % 8 != 0) {
            console.log(i);
            sum += i;
            counter++;
        }
    }

    message.innerHTML = `Numbers of numbers : ${counter}<br>Sum of numbers : ${sum}`;
});
