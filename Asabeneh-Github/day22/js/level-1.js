const title = document.querySelector('.title');
const titleInDiv = document.querySelector('.title div');
console.log(titleInDiv);
const h1 = document.querySelector('h1');
const h5 = document.querySelector('h5');
const h6 = document.querySelector('h6');
const col = Array.from(document.querySelectorAll('.col'));
console.log(col);

//! titleInDiv
titleInDiv.style.display = 'flex';
titleInDiv.style.flexDirection = 'column';
titleInDiv.style.justifyContent = 'center';
titleInDiv.style.alignItems = 'center';
titleInDiv.style.paddingTop = '20px';
titleInDiv.style.paddingBottom = '20px';

//! h5
h5.style.textDecoration = 'underline';
h5.style.fontWeight = '400';

//! h6
h6.style.textDecoration = 'underline';
h6.style.fontWeight = '400';

//! col

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

col.forEach((element, index) => {
    if (isPrime(index)) {
        element.style.backgroundColor = 'pink';
    } else if (index % 2 === 0) {
        element.style.backgroundColor = 'green';
    } else {
        element.style.backgroundColor = 'yellow';
    }

    element.innerHTML = `${index}`;
    element.style.margin = '5px 5px';
    element.style.padding = '10px 10px';
});
