//! ---------------- Keyboard Events ----------------

//? keypress
/* document.addEventListener('keypress', (e) => {
    //console.log(e.type);
    //console.log(e.key);//klavyeden tiklanan tusu gosterir.
    console.log(e.which); //keyCode vs which
}); */
//todo:sadece harf ve sayilar icindir.

//? keydown
/* document.addEventListener('keydown', (e) => {
    console.log(e.type);
    console.log(e.key);
    console.log(e.which);
}); */
//todo:butun tuslar icin calisir.klavyeye bastigin an calisir

//? keyup
/* document.addEventListener('keyup', (e) => {
    console.log(e.type);
    console.log(e.key);
    console.log(e.which);
}); */
//todo:tustan elini kaldirdiginda calisir.butun tuslar icin calisir.

//? F5 te yenilemeye izin verme
/* document.addEventListener('keydown', (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 116) {
        alert('page refresh blocked');
    }
    e.preventDefault();
}); */

// ? example
const cardTitle = document.querySelectorAll('.card-title')[0];
const input = document.querySelector('#todoName');
input.addEventListener('keypress', (e) => {
    console.log(e.target.value);
});

input.addEventListener('keyup', (e) => {
    cardTitle.textContent = e.target.value;
});
