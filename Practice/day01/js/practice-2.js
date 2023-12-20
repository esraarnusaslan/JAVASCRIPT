const color1 = document.querySelector('.black');
const color2 = document.querySelector('.blue');
const color3 = document.querySelector('.purple');
const color4 = document.querySelector('.yellow');

const false1 = document.querySelector('#false');

color1.innerText = 'Blue';
color2.innerText = 'Black';
color3.innerText = 'Purple';
color4.innerText = 'Yellow';

let falseSide = `
<div class="kutu">
            <div class="black">Blue</div>
            <div class="blue">Black</div>
            <div class="yellow">Purple</div>
            <div class="purple">Yellow</div>
        </div>
`;

false1.innerHTML = `<h1>Colors</h1> ${falseSide}`;
