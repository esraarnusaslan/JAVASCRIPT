const keypadEl = document.querySelector('.calculator .keypad');
const operationsEl = document.querySelector('.calculator .operations');
const resultEl = document.querySelector('.calculator .result');

let calculated = false;

keypadEl.addEventListener('click', (e) => {
    const buttonVal = e.target.innerText;
    if (buttonVal === '=') {
        const result = eval(operationsEl.innerText);
        resultEl.innerText = result;
        calculated = true;
    } else {
        if (calculated) {
            if (isNaN(buttonVal)) {
                operationsEl.innerText = resultEl.innerText + buttonVal;
            } else {
                operationsEl.innerText = buttonVal;
            }
        } else {
            operationsEl.innerText += buttonVal;
        }

        calculated = false;
    }
});
