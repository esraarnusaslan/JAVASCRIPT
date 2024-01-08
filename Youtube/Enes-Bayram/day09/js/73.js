//! ---------------- Mouse Events ----------------

//? DOMContentLoaded
/* 
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded');
}); 
*/

//? load
/* window.addEventListener('load', () => {
    console.log('Load event');
}); */
//todo:window uzerinden yapiliyor.

//? click-dblclick
/* document.querySelectorAll('.card-title')[1].addEventListener('dblclick', () => {
    console.log('click event');
}); */

//? mouseover(uzerinde gezdiginde)-mouseout(uzerinden ciktiginda)
/* const cardBody = document.querySelectorAll('.card-body')[1];
cardBody.addEventListener('mouseover', (e) => {
    console.log(e.type);
}); */

//? mouseenter
//todo:(sadece verdigi html elementi icin calisir. html elementin icindeki diger elementler icin mouseover calisir.)
/* const cardBody = document.querySelectorAll('.card-body')[1];
cardBody.addEventListener('mouseenter', (e) => {
    console.log(e.type);
}); */

//? mousedown

const cardBody = document.querySelectorAll('.card-body')[1];
cardBody.addEventListener('mouseleave', (e) => {
    console.log(e.type);
});
