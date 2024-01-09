const tagName = document.getElementsByTagName('h1');
console.log(tagName); //! HTMLCollections

for (let i = 0; i < tagName.length; i++) {
    console.log(tagName[i]); // prints each elements in the HTMLCollection
}

const className = document.getElementsByClassName('title');
console.log(className); //! HTMLCollections

for (let i = 0; i < className.length; i++) {
    console.log(className[i]); // prints each elements in the HTMLCollection
}

let firstTitle1 = document.getElementById('first-title');
console.log(firstTitle1); // <h1>First Title</h1>

let firstTitle2 = document.querySelector('h1'); // select the first available h1 element
console.log(firstTitle2);
let firstTitle3 = document.querySelector('#first-title'); // select id with first-title
console.log(firstTitle3);
let firstTitle4 = document.querySelector('.title'); // select the first available element with class title
console.log(firstTitle4);

const allTitles1 = document.querySelectorAll('h1'); //selects all the available h1 elements in the page

console.log(allTitles1.length); // 4
for (let i = 0; i < allTitles1.length; i++) {
    console.log(allTitles1[i]);
}

allTitles1.forEach((title) => console.log(title));
const allTitles2 = document.querySelectorAll('.title'); // the same goes for selecting using class
console.log(allTitles2); //! nodeList

const titles = document.querySelectorAll('h1');
titles[3].className = 'title';
titles[3].id = 'fourth-title';

console.log(titles);

const titles2 = document.querySelectorAll('h1');
titles2[3].setAttribute('class', 'classTitle');
titles2[3].setAttribute('id', 'fourth-title2');

//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.add('title', 'header-title');

const titles3 = document.querySelectorAll('h1');
titles3[3].textContent = 'Fourth Title';

const lists = `
    <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>`;
const ul = document.querySelector('ul');
console.log(ul);
ul.innerHTML = lists;

const ul2 = document.querySelector('ul');
ul2.innerHTML = '';

const titles5 = document.querySelectorAll('h1');
titles5.forEach((titles5, i) => {
    titles5.style.fontSize = '24px'; // all titles will have 24px font size
    if (i % 2 === 0) {
        titles5.style.color = 'green';
    } else {
        titles5.style.color = 'red';
    }
});

const titles6 = document.querySelectorAll('h1');
titles6.forEach((titles6, i) => {
    titles6.style.fontSize = '24px'; // all titles will have 24px font size
    if (i % 2 === 0) {
        titles6.style.backgroundColor = 'green';
        titles6.style.color = 'black';
    } else {
        titles6.style.backgroundColor = 'red';
        titles6.style.color = 'black';
    }
});

const titles7 = document.querySelectorAll('h1');
titles7.forEach((titles7, i) => {
    if (i % 2 === 0) {
        titles7.style.fontSize = '20px';
    } else {
        titles7.style.fontSize = '30px';
    }
});
