function getName(cb) {
    setTimeout(() => {
        console.log('Tom');
        cb();
    }, 1000);
}

function getSurName() {
    setTimeout(() => {
        console.log('Bob');
    }, 500);
}

/* getName();
getSurName(); */
//result: Bob Tom cb olmadan

//! callback ler bir fonksiyona parametre gecerek asenkron yapiyi senkrona ceviririz

getName(getSurName);

