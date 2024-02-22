const ekranEl = document.querySelector("#ekran");
const sifreUzEl = document.querySelector("#sifreUz");
const upperEl = document.querySelector("#upper");
const lowerEl = document.querySelector("#lower");
const sayiEl = document.querySelector("#sayi");
const sembolEl = document.querySelector("#sembol");
const uretEl = document.querySelector("#uret");
/* büyük-küçük harf, sayı ve sembolleri bir değere atayalım */
const buyukHarf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const kucukHarf = "abcdefghijklmnopqrstuvwxyz";
const sayi = "0123456789";
const sembol = "!@#$^%&*()_+=.";
/* random olarak küçük harf getiren fonksiyon */
const getLowerCase = () => {
  return kucukHarf[Math.floor(Math.random() * kucukHarf.length)];
};
/* random olarak büyük harf getiren fonksiyon */
const getUpperCase = () => {
  return buyukHarf[Math.floor(Math.random() * buyukHarf.length)];
};
/* random olarak sayı getiren fonksiyon */
const getNumber = () => {
  return sayi[Math.floor(Math.random() * sayi.length)];
};
/* random olarak sembol getiren fonksiyon */
const getSymbol = () => {
  return sembol[Math.floor(Math.random() * sembol.length)];
};
/* kullanıcının seçimlerine göre şifre üreten temel fonksiyon */
const sifreUret = () => {
  const inputUz = sifreUzEl.value;
  let password = "";
  if (upperEl.checked) {
    password += getUpperCase();
  }
  if (lowerEl.checked) {
    password += getLowerCase();
  }
  if (sayiEl.checked) {
    password += getNumber();
  }
  if (sembolEl.checked) {
    password += getSymbol();
  }
  if (password.length === 0) {
    ekranEl.innerText = "sfrThMNn?.!";
    alert("Herhangi bir checkbox seçilmedi!");
    return;
  }
  for (let i = password.length; i < inputUz; i++) {
    password += tamamla();
  }
  ekranEl.innerText = password;
};
/* kullanıcının seçimleriyle belirlediği şifre uzunluğu arasındaki boşluğu yine kullanıcın seçimlerine göre tamamlama fonksiyonu */
const tamamla = () => {
  const tamamlamaArr = [];
  if (upperEl.checked) {
    tamamlamaArr.push(getUpperCase());
  }
  if (lowerEl.checked) {
    tamamlamaArr.push(getLowerCase());
  }
  if (sayiEl.checked) {
    tamamlamaArr.push(getNumber());
  }
  if (sembolEl.checked) {
    tamamlamaArr.push(getSymbol());
  }
  if (tamamlamaArr.length === 0) return;
  return tamamlamaArr[Math.floor(Math.random() * tamamlamaArr.length)];
};
/* butona tıklandığında sifreUret fonksiyonu çalışsın */
uretEl.addEventListener("click", sifreUret);