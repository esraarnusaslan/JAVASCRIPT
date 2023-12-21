let turkceDogru,
    turkceYanlis = 0;

let matematikDogru,
    matematikYanlis = 0;

let fenDogru,
    fenYanlis = 0;

let sosyalDogru,
    sosyalYanlis = 0;

let puan = 0;

let okulPuani = 0;

let yeniSatir = '\r\n';
let mesaj =
    'TYT Puan Hesaplama uygulamasina hosgeldiniz' +
    yeniSatir +
    '1-Puan Hesapla' +
    yeniSatir +
    '2-Cikis';

let secim = prompt(mesaj);

switch (secim) {
    case '1':
        okulPuani = Number(prompt('okul puaninizi giriniz'));
        turkceDogru = Number(prompt('turkce dogru sayisini giriniz'));
        turkceYanlis = Number(prompt('turkce yanlis sayisini giriniz'));

        matematikDogru = Number(prompt('matematik dogru sayisini giriniz'));
        matematikYanlis = Number(prompt('matematik yanlis sayisini giriniz'));

        fenDogru = Number(prompt('fen dogru sayisini giriniz'));
        fenYanlis = Number(prompt('fen yanlis sayisini giriniz'));

        sosyalDogru = Number(prompt('sosyal dogru sayisini giriniz'));
        sosyalYanlis = Number(prompt('sosyal yanlis sayisini giriniz'));

        let dogruSayisi = turkceDogru + matematikDogru + fenDogru + sosyalDogru;
        let yanlisSayisi =
            turkceYanlis + matematikYanlis + fenYanlis + sosyalYanlis;

        let kalanDogruSayisi = dogruSayisi - yanlisSayisi / 4;
        puan = kalanDogruSayisi * 4 + 100 + okulPuani;
        alert('TYT puaniniz:' + puan);

        break;

    case '2':
        alert('uygulamadan cikis yapildi');
        break;

    default:
        alert('lutfen gecerli bir deger giriniz');
        break;
}
