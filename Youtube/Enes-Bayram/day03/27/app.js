let yeniSatir = '\r\n';
let bakiye = 1000;

let metin =
    '1-Bakiye goruntuleme' +
    yeniSatir +
    '2-Para cekme' +
    yeniSatir +
    '3-Para yatirma' +
    yeniSatir +
    '4-Cikisi' +
    yeniSatir +
    'Lutfen bir deger seciniz';

let secim = prompt(metin);

switch (secim) {
    case '1':
        alert('bakiyeniz:' + bakiye);
        break;

    case '2':
        let cekilecekTutar = Number(
            prompt('cekmek istediginiz tutari giriniz')
        );

        if (cekilecekTutar < bakiye) {
            bakiye = bakiye - cekilecekTutar;
            alert('bakiyeniz:' + bakiye);
        } else {
            alert(
                'bakiyeniz yetersiz' +
                    yeniSatir +
                    'bakiyeniz:' +
                    bakiye +
                    ' ' +
                    'cekilecek tutar:' +
                    cekilecekTutar
            );
        }

        break;

    case '3':
        let yatirilacakTutar = Number(
            prompt('yatirmak istediginiz tutari giriniz')
        );
        bakiye = bakiye + yatirilacakTutar;
        alert('bakiyeniz:' + bakiye);
        break;

    case '4':
        alert('cikis yapilmistir');
        break;

    default:
        alert('lutfen 1 ile 4 arasinda bir rakam giriniz');
        break;
}
