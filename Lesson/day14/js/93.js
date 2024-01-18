import {
    numberSortASC,
    numberSortDESC,
    stringSortASC,
    stringSortDESC,
    randomMix,
} from './module-practice.js';

const arr1 = [123, -23, -90, 34, 12];
const arr2 = ['John', '23', 'Mary', 'Jerry'];
console.log(arr1);
console.log(arr2);

document.getElementById('btn1').addEventListener('click', () => {
    const sortedArr = numberSortASC(arr1);
    console.log(sortedArr); //[-90, -23, 12, 34, 123]
});

document.getElementById('btn2').addEventListener('click', () => {
    const sortedArr = numberSortDESC(arr1);
    console.log(sortedArr); //[123, 34, 12, -23, -90]
});

document.getElementById('btn3').addEventListener('click', () => {
    const sortedArr = stringSortASC(arr2);
    console.log(sortedArr); //['23', 'Jerry', 'John', 'Mary']
});

document.getElementById('btn4').addEventListener('click', () => {
    const sortedArr = stringSortDESC(arr2);
    console.log(sortedArr); //['Mary', 'John', 'Jerry', '23']
});

document.getElementById('btn5').addEventListener('click', () => {
    const sortedArr = randomMix(arr2);
    console.log(sortedArr); //['Mary', 'John', 'Jerry', '23']
});
