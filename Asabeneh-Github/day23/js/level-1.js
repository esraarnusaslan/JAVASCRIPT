const container = document.querySelector('.container');
const h1 = document.querySelector('h1');
const h5 = document.querySelector('h5');
const h6 = document.querySelector('h6');

const button = document.querySelector('#button-addon2');

//! container
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';

//! h1
h1.style.fontWeight = '400';
h1.style.margin = '0';
h1.style.color = 'green';

//! h5
h5.style.fontWeight = '400';
h5.style.margin = '0';

//! h6
h6.style.fontWeight = '400';
h6.style.margin = '0';

//! isPrime
const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

//! click
button.addEventListener('click', () => {
    const input = document.querySelector('input');
    const inputValue = parseInt(input.value);
    if (isNaN(inputValue) || inputValue <= 0) {
        input.setCustomValidity('Please enter a valid positive number');
        input.reportValidity();
        input.value = '';
        return;
    }
    let numbersAll = '';
    for (let i = 0; i < inputValue; i++) {
        numbersAll += `<div class="col">${i}</div>`;
    }
    document.querySelector('.numberRow').innerHTML = numbersAll;
    addEvenPrime();
    input.value = '';
});

//! col
//! add,even and prime numbers
const addEvenPrime = () => {
    const cols = document.querySelectorAll('.numberRow .col');
    cols.forEach((element, index) => {
        const num = parseInt(element.textContent);
        if (isPrime(num)) {
            element.style.backgroundColor = 'red';
        } else if ((num + 1) % 2 === 0) {
            element.style.backgroundColor = 'green';
        } else {
            element.style.backgroundColor = 'yellow';
        }
    });
};
