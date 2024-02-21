let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');
const result = document.querySelector('#result');

const handleOkek = () => {
    let number1Value = Number(number1.value);
    let number2Value = Number(number2.value);

    if (number1Value > number2Value) {
        let temp = number1Value;
        number1Value = number2Value;
        number2Value = temp;
    }

    for (let i = number1Value; i <= number2Value*number1Value; i++) {
        if (i % number1Value == 0 && i % number2Value == 0) {
            result.innerHTML = `The LCM of ${number1Value} and ${number2Value} is ${i}`;
            break;
        }
    }
};

document.querySelector('#okek').addEventListener('click', handleOkek);
