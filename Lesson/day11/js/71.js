document.getElementById('btn1').addEventListener('click', () => {
    message.classList.add('red');
});

document.getElementById('btn2').addEventListener('click', () => {
    message.classList.remove('red');
});

document.getElementById('btn3').addEventListener('click', () => {
    message.classList.toggle('blue');
});

document.getElementById('btn4').addEventListener('click', () => {
    message.classList.replace('blue', 'black');
});

message.style.borderWidth = '3px';
message.style.borderColor = 'red';
message.style.borderStyle = 'solid';

message.style.border = '3px solid blue';
