const listEl = document.querySelector('.list');
console.log(listEl.children);
console.log(listEl.children[3]);
console.log(listEl.firstElementChild);//ilk cocuk
console.log(listEl.lastElementChild);//son cocuk
console.log(listEl.parentElement); //bir ust parenti secer sadece


const liAbout=document.getElementById("lnkAbout");
console.log(liAbout);
console.log(liAbout.nextElementSibling);//sonraki kardes
console.log(liAbout.previousElementSibling);//onceki kardes