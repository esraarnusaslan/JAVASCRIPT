document.querySelector('#btnGetAverage').addEventListener('click', () => {
    const txtScore1 = document.querySelector('#txtScore1');
    const txtScore2 = document.querySelector('#txtScore2');
    const elResult = document.querySelector('#result');

    if (!isScoreValue(txtScore1.value) || !isScoreValue(txtScore2.value)) {
        alert('Please enter valid score value');
        return;
    }
    score1 = Number(txtScore1.value);
    score2 = Number(txtScore2.value);

    const average = getAverage(score1, score2);
    const letter = convertToLetter(average);

    elResult.innerHTML = `Average: ${average} <br> Letter: ${letter}`;
});

const getAverage = (num1, num2) => {
    return (num1 + num2) / 2;
};

const convertToLetter = (score) => {
    let letter = '';

    if (score >= 90) {
        letter = 'A';
    } else if (score >= 80) {
        letter = 'B';
    } else if (score >= 70) {
        letter = 'C';
    } else if (score >= 60) {
        letter = 'D';
    } else {
        letter = 'F';
    }
    return letter;
};

const isScoreValue = (score) => {
    return !!score && score >= 0 && score <= 100;
};

/* console.log(isScoreValue(null));//true
console.log(isScoreValue(''));//true
console.log(isScoreValue(undefined));//false
console.log(isScoreValue(NaN));//false
console.log(isScoreValue(false));//true */
