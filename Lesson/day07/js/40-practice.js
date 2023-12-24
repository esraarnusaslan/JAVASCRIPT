let randomNumber;
const btnGuess = document.querySelector('.btn-guess');
const btnStart = document.querySelector('.btn-start');
const txtNumber = document.querySelector('#txtNumber');
const lblResult = document.querySelector('#lblResult');

const start = () => {
    randomNumber = generateRandomNumber(100, 1);
    btnGuess.style.display = 'inline';
    btnStart.style.display = 'none';
    txtNumber.pointerEvents = 'all';
    txtNumber.focus();
};

const guess = () => {
    let num = txtNumber.value;
    num ||= 0; //bos gecerse 0 olsun dedik

    if (num > randomNumber) {
        lblResult.innerHTML = 'Go down';
    } else if (num < randomNumber) {
        lblResult.innerHTML = 'Go up';
    } else {
        lblResult.innerHTML = 'Congrats! You guessed the number';
        btnGuess.style.display = 'none';
        btnStart.style.display = 'inline';
        txtNumber.pointerEvents = 'none';
    }
    txtNumber.value = '';
    txtNumber.focus();
};

const generateRandomNumber = (max, min) =>
    Math.floor(Math.random() * (max - min + 1) + min);
