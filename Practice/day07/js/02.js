const sanalSecimEl = document.querySelector("#bilgisayar");
const kullaniciSecimiEl = document.querySelector("#kullanici");
const sonucEl = document.querySelector("#sonuc");
const butonlar = document.querySelectorAll("button");
let sanalSecim;
let sonuc;
const generateSanalSecim = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 1) {
    sanalSecim = "tas";
  }
  if (randomNumber == 2) {
    sanalSecim = "makas";
  }
  if (randomNumber == 3) {
    sanalSecim = "kagit";
  }
  sanalSecimEl.innerHTML = sanalSecim;
};
const getResult = () => {
  if (sanalSecim == kullaniciSecimiEl.innerText) {
    sonuc = "Beraberesiniz";
  } else if (sanalSecim == "tas" && kullaniciSecimiEl.innerText == "kagit") {
    sonuc = "Sen Kazandın";
  } else if (sanalSecim == "tas" && kullaniciSecimiEl.innerText == "makas") {
    sonuc = "Kaybettin";
  } else if (sanalSecim == "kagit" && kullaniciSecimiEl.innerText == "makas") {
    sonuc = "Sen Kazandın";
  } else if (sanalSecim == "kagit" && kullaniciSecimiEl.innerText == "tas") {
    sonuc = "kaybettin";
  } else if (sanalSecim == "makas" && kullaniciSecimiEl.innerText == "tas") {
    sonuc = "Sen Kazandın";
  } else if (sanalSecim == "makas" && kullaniciSecimiEl.innerText == "kagit") {
    sonuc = "Kaybettin";
  }
  sonucEl.innerHTML = sonuc;
};
butonlar.forEach((buton) => {
  buton.addEventListener("click", (e) => {
    kullaniciSecimiEl.innerHTML = e.target.id;
    generateSanalSecim();
    getResult();
  });
});