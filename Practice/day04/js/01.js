const colors = ['Yellow', 'Green', 'Red', 'Blue', 'Aqua', 'Pink'];

let colorName = document.getElementById('color');
let button = document.getElementById('change-color');

let body = document.querySelector('body');
let colorIndex;

const changeColor = () => {
    colorIndex = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
    colorName.innerText = colors[colorIndex];
    button.innerText = colors[colorIndex];
};

button.addEventListener('click', changeColor);
