const btnStart = document.querySelector('#btnStart');
const txtNumber = document.querySelector('#txtNumber');
const pnlGuess = document.querySelector('#pnlGuess');
const lblMessage = document.querySelector('#lblMessage');
const totalShot = document.querySelector('#lblTotalShot');
const btnGuess = document.querySelector('#btnGuess');

let randomNumber = 0;
let minNumber = 1;
let maxNumber = 100;
let totalCount = 15;
let shot = 0;
let status = ''; //on off

btnStart.addEventListener('click', () => {
    start();
});

btnGuess.addEventListener('click', () => {
    guess();
});

txtNumber.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        guess();
    }
});

const start = () => {
    randomNumber = getRandomNumber();
    shot = totalCount;
    status = 'on';
    lblMessage.innerText = `Guess between ${minNumber} and ${maxNumber}`;
    totalShot.innerText = shot;
    pnlGuess.classList.remove('d-none');
    txtNumber.focus();
    txtNumber.value = '';
};

const guess = () => {
    if (status === 'off') {
        alert('The game is over. Please restart game');
        return;
    }
    let number = txtNumber.value;
    let message = '';

    if (!number || isNaN(number) || number < minNumber || number > maxNumber) {
        lblMessage.innerText = `Enter between ${minNumber} and ${maxNumber} `;
        return;
    }
    shot--;
    if (totalCount <= 0) {
        message = 'Game over';
        status = 'off';
    } else if (number > randomNumber) {
        message = `Less than ${number}`;
        txtNumber.value = '';
        txtNumber.focus();
    } else if (number < randomNumber) {
        message = `Greater than ${number}`;
        txtNumber.value = '';
        txtNumber.focus();
    } else {
        message = 'Congratulations';
        status = 'off';
    }
    lblMessage.innerText = message;
    totalShot.innerText = shot;
};

const getRandomNumber = () => {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};
