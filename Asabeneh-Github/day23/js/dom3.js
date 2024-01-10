/* const button = document.querySelector('button');
button.addEventListener('mouseenter', (e) => {
    console.log(e); //pointerEvent nesnesini verir.
    console.log(e.target); //secilen ogeyi verir.html tagi ile birlikte
    console.log(e.target.textContent); //innerText ini verir.
}); */

//dblclick(cift tik yapildinda)
//mouseenter(mouse ile ustune gelindiginde)
//mouseleave(mouse ile ustunden ciktiginda)
/* mousemove - fare işaretçisi öğe üzerinde hareket ettiğinde
mouseover - fare işaretçisi öğe üzerinde hareket ettiğinde
mouseout - fare işaretçisi öğeden dışarı çıktığında
input - değer giriş alanına girildiğinde
change - giriş alanında değer değiştiğinde
blur - öğe odaklanmadığında
keydown - bir tuş düştüğünde
keyup - bir anahtar bittiğinde
keypress - herhangi bir tuşa bastığımızda
onload - tarayıcı bir sayfayı yüklemeyi bitirdiğinde */

/* const button = document.querySelector('button');

button.addEventListener('click', () => {
    const mass = document.getElementById('mass');
    let massValue = mass.value;

    const height = document.getElementById('height');
    let heightValue = height.value;

    let bmi = massValue / heightValue ** 2;
    alert(`your bmi is ${bmi.toFixed(2)}`);
    console.log(bmi);
}); */

/* const input = document.querySelector('input');
const p = document.querySelector('p');

input.addEventListener('change', (e) => {
    p.textContent = e.target.value;
}); */

const input = document.querySelector('input');
const p = document.querySelector('p');
input.addEventListener('blur', (e) => {
    p.textContent = 'Field is required';
    p.style.color = 'red';
});


document.body.addEventListener("keypress", (e) => {
    alert(e.keyCode);
});
