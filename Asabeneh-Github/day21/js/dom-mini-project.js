const selectDiv = document.querySelector('.wrapper');
const h1 = document.querySelector('h1');
const yearSpan = document.querySelector('.year');
const year = document.querySelector('h1');
const h2 = document.querySelector('h2');
const dateSpan = document.querySelector('.date');
const container = document.querySelector('.container');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');
const li1 = document.querySelector('ul li:first-child');
const li2 = document.querySelector('ul li:nth-child(2)');

//! DIV
selectDiv.style.display = 'flex';
selectDiv.style.flexDirection = 'column';
selectDiv.style.justifyContent = 'center';
selectDiv.style.alignItems = 'center';
selectDiv.style.marginBottom = '0px';

//! h1
h1.style.position = 'relative';

//! year Span
yearSpan.style.fontSize = '100px';

const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

setInterval(() => {
    dateSpan.style.color = 'black';
    yearSpan.style.color = randomColor();
    dateSpan.style.backgroundColor = randomColor();
}, 1000);

//! h2
h2.style.marginTop = '0';
h2.style.fontSize = '20px';
h2.style.fontWeight = 'lighter';
h2.style.textDecoration = 'underline';

//! Date
const now = new Date();
const monthName = now.toLocaleDateString('default', { month: 'long' });
console.log(monthName);

const monthDay = now.getDay();
console.log(monthDay);

const yearNow = now.getFullYear();
console.log(yearNow);

const hour = now.toLocaleTimeString();
console.log(hour);

dateSpan.textContent = `${monthName} ${monthDay}, ${yearNow} ${hour}`;
dateSpan.style.backgroundColor = 'greenYellow';
dateSpan.style.padding = '10px 20px';

//! container
container.style.position = 'absolute';
container.style.left = '0';
container.style.right = '0';
container.style.top = '250px';

//! ul
ul.style.listStyle = 'none';
li.forEach((li) => {
    li.style.marginBottom = '10px';
});

//! li
for (let i = 2; i < li.length; i++) {
    li[i].style.color = 'dark';
    li[i].style.backgroundColor = 'pink';
    li[i].style.padding = '10px 20px';
}

//! li1
li1.style.backgroundColor = 'lightGreen';
li1.style.padding = '10px 20px';

//! li2
li2.style.backgroundColor = 'yellow';
li2.style.padding = '10px 20px';
