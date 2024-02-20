let message = document.querySelector('.remaining');

const handleMath = () => {
    let bigNumber = document.querySelector('#bigNumber').value;
    let smallNumber = document.querySelector('#smallNumber').value;
    let remaining = 0;
    console.log(bigNumber, smallNumber);
    while (bigNumber > smallNumber) {
        smallNumber++;
        remaining += bigNumber % smallNumber;
        console.log(remaining, bigNumber, smallNumber);
    }
    console.log(remaining, bigNumber, smallNumber);
    message.innerText = `The sum of the remainders of the parts of the largest number and the smallest number until they are equal to each other: ${remaining} `;
};
