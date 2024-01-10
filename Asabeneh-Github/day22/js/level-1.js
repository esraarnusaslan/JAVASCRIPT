const colTitle = document.querySelector('.colTitle');
const h1 = document.querySelector('h1');
const h5 = document.querySelector('h5');
const h6 = document.querySelector('h6');

//! colTitle

//! h1

//! h5
h5.style.textDecoration = 'underline';
h5.style.fontWeight = '400';

//! h6
h6.style.textDecoration = 'underline';
h6.style.fontWeight = '400';

//! isPrime()

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

//! colNumber

const addNumbers = () => {
    let colNumberAll = '';

    for (let i = 0; i < 55; i++) {
        colNumberAll += `<div class="col">${i}</div>`;
    }
    document.querySelector('.colNumbers').innerHTML = colNumberAll;
    addEvenNumber();
};

//! add,even number

const addEvenNumber = () => {
    const colAll = document.querySelectorAll('.colNumbers .col');
    colAll.forEach((element, index) => {
        const num = parseInt(element.textContent);

        if (isPrime(num)) {
            element.style.backgroundColor = 'pink';
        } else if ((num + 1) % 2 === 0) {
            element.style.backgroundColor = 'green';
        } else {
            element.style.backgroundColor = 'yellow';
        }
    });
};
addNumbers();
