let title = document.createElement('h1');
title.className = 'title';
title.style.fontSize = '20px';
title.textContent = 'Creating HTML element DOM Day 2';
console.log(title);

document.body.appendChild(title);

let title2;
for (let i = 0; i < 3; i++) {
    title2 = document.createElement('h1');
    title2.className = 'title';
    title2.style.fontSize = '24px';
    title2.textContent = i;
    console.log(title2);
    document.body.appendChild(title2);
}

const ul = document.querySelector('ul');
const list = document.querySelectorAll('li');
//1.WAY
/* for (let lists of list) {
    ul.removeChild(lists)
} */

//2.WAY
ul.innerHTML = '';
