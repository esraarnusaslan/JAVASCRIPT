// ========== MATH METHODS ==================

//! floor()
let a = 3.49;
console.log(Math.floor(a)); //3

// ! ceil()
console.log(Math.ceil(a)); // yuvarlama. 3.05 de olsa 3.95 te olsa 4 e yuvarlar

//! round()
console.log(Math.round(a)); // 3.49 a kadar sonuc 3 doner, 3.50 ve sonrasi 4 doner

//! max()
console.log(Math.max(1, 2, 3, 59)); //59

//! min()
console.log(Math.min(1, -2, 3, 59)); //-2

//! Abs(mutlak deger almak icin kullanilir)
let b = -12;
console.log(Math.abs(b)); //12

//! sqrt() karekokunu alir
console.log(Math.sqrt(144)); //12

//! pow() ussunu alir. 1.sayi taban 2. sayi us tur.
console.log(Math.pow(10, 2)); //100

//! PI
console.log(Math.PI); //3.141592653589793

//! Random()
console.log(Math.floor(Math.random() * 100)); // 0 ile 1 arasinda rastgele bir deger doner. 100 ile carparsan 1 ile 100 arasinda doner.
// floor ile de noktadan sonrasini sildik
