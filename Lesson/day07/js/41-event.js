// ! 1. Way

const sayHello1 = () => {
    alert('Hello 1');
};

// ! 2. Way

const sayHello2 = () => {
    alert('Hello 2');
};

const btn2 = document.querySelector('#btnHello');
btn2.onclick = sayHello2; //() kullanilmaz

// ! 3. Way
const sayHello3 = () => {
    alert('Hello 3');
};

const btn3 = document.querySelector('#btnHello');
btn3.addEventListener('click', sayHello3);

// ! 4. Way

document.querySelector('#btnHello').addEventListener('mouseenter', () => {
    alert('Mouse enter');
});
