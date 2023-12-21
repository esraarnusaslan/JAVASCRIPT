let kilo = Number(prompt('kilonuzu giriniz'));
let boy = Number(prompt('Boyunuzu metre cinsinden giriniz'));

let sonuc = kilo / (boy * 2);

if (sonuc <= 18.5) {
    console.log('ideal kilonun altinda');
} else if (sonuc >= 18.5 && sonuc <= 24.9) {
    console.log('ideal kilonun altinda');
} else if (sonuc >= 25 && sonuc <= 29.9) {
    console.log('ideal kiloda');
} else if (sonuc >= 30 && sonuc <= 39.9) {
    console.log('ideal kilonun cok ustunde(obez)');
} else if (sonuc >= 40) {
    console.log('ideal kilonun cok cok ustunde (morbid obez)');
}
