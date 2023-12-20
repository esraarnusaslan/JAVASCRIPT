let mode = true;

const change = document.querySelector('#content');
const elChange = change.classList;

const button = document.querySelector('.color2');
const elButton = button.classList;

function changeColor() {
    if (mode) {
        elChange.remove('color1');
        elChange.add('color2');

        elButton.remove('color2');
        elButton.add('color1');
    } else {
        elChange.remove('color2');
        elChange.add('color1');

        elButton.remove('color1');
        elButton.add('color2');
    }

    mode = !mode;
}
