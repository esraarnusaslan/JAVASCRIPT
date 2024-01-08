//! --------- Input Events ---------------

// focus
const todo = document.querySelector('#todoName');
todo.addEventListener('focus', (e) => {
    console.log(e.type);
});
//todo: input a girdiginde calisir

// blue
todo.addEventListener('blur', (e) => {
    console.log(e.type);
});

//todo:inputtan ciktiginda calisir

// copy
todo.addEventListener('copy', (e) => {
    console.log(e.type);
});
//todo: inputtaki copy yaptiginda calisir

// paste
todo.addEventListener('paste', (e) => {
    console.log(e.type);
});
//todo: inputtaki paste yaptiginda calisir

// cut
todo.addEventListener('cut', (e) => {
    console.log(e.type);
});
//todo: inputtaki cut yaptiginda calisir

// select
todo.addEventListener('select', (e) => {
    console.log(e.type);
});
//todo: inputtaki select yaptiginda calisir.mouse dan cektigin an sectigin yere kadar select yapar
