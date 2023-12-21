let dizel = 24.53,
    benzin = 22.25,
    lpg = 11.1;
const yeniSatir = '\r\n';

const yakitMetni =
    '1-Dizel' +
    yeniSatir +
    '2-Benzin' +
    yeniSatir +
    '3-LPG' +
    yeniSatir +
    'Yakit turunuzu seciniz';

let yakitTipi = prompt(yakitMetni);

if (yakitTipi == '1' || yakitTipi == '2' || yakitTipi == '3') {
    let yakitLitresi = Number(prompt('yakit litresi giriniz'));
    let bakiye = Number(prompt('bakiyenizi giriniz'));

    if (yakitTipi == '1') {
        let odenecekTutar = dizel * yakitLitresi;
        if (odenecekTutar < bakiye) {
            bakiye = bakiye - odenecekTutar;
            alert(
                'yakit alma islemi basarili' +
                    yeniSatir +
                    'Kalan bakiye:' +
                    bakiye
            );
        } else {
            alert(
                'bakiyeniz yeterli degildir' +
                    yeniSatir +
                    'odenecek tutar:' +
                    odenecekTutar +
                    yeniSatir +
                    'bakiye:' +
                    bakiye +
                    yeniSatir +
                    'eksik tutar:' +
                    (odenecekTutar - bakiye)
            );
        }
    } else if (yakitTipi == '2') {
        let odenecekTutar = benzin * yakitLitresi;
        if (odenecekTutar < bakiye) {
            bakiye = bakiye - odenecekTutar;
            alert(
                'yakit alma islemi basarili' +
                    yeniSatir +
                    'Kalan bakiye:' +
                    bakiye
            );
        } else {
            alert(
                'bakiyeniz yeterli degildir' +
                    yeniSatir +
                    'odenecek tutar:' +
                    odenecekTutar +
                    yeniSatir +
                    'bakiye:' +
                    bakiye +
                    yeniSatir +
                    'eksik tutar:' +
                    (odenecekTutar - bakiye)
            );
        }
    } else if (yakitTipi == '3') {
        let odenecekTutar = lpg * yakitLitresi;
        if (odenecekTutar < bakiye) {
            bakiye = bakiye - odenecekTutar;
            alert(
                'yakit alma islemi basarili' +
                    yeniSatir +
                    'Kalan bakiye:' +
                    bakiye
            );
        } else {
            alert(
                'bakiyeniz yeterli degildir' +
                    yeniSatir +
                    'odenecek tutar:' +
                    odenecekTutar +
                    yeniSatir +
                    'bakiye:' +
                    bakiye +
                    yeniSatir +
                    'eksik tutar:' +
                    (odenecekTutar - bakiye)
            );
        }
    }
} else {
    alert('lutfen gecerli bir yakit turu giriniz');
}
