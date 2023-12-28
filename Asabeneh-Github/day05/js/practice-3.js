const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//! Diziyi sıralayın ve en küçük ve en büyük yaşı bulun

const sortArr = ages.sort();
console.log(sortArr); //[19, 19, 20, 22, 24, 24, 24, 25, 25, 26]
const minAge = Math.min(...ages);
console.log(minAge); //19
const maxAge = Math.max(...ages);
console.log(maxAge); //26

//! Medyan yaşı bulun(dizinin ortasındaki eleman ama
//! ortada iki eleman varsa elemanlar ikiye bölünür)

console.log(sortArr);
let arrLength = sortArr.length; //10

let median;

if (arrLength % 2 == 0) {
    const min1 = sortArr[arrLength / 2 - 1]; //4.index=20
    const min2 = sortArr[arrLength / 2]; //5.index=25
    median = Math.floor((min1 + min2) / 2);
} else {
    median = sortArr[Math.floor(arrLength / 2)];
}
console.log(median);

//! Ortalama yaşı bulun(tüm elemanlar eleman sayısına bölünür)

let sum = 0;

for (let i = 0; i < ages.length; i++) {
    sum = sum + ages[i];
}
const average = sum / ages.length;
console.log(average);

//! Yaş aralığını bulun (maks - min)
const ageRange = maxAge - minAge;
console.log(ageRange);

//! abs() metodunu kullanarak (min - ortalama) ve (maks - ortalama) değerlerini karşılaştırın,

const minAverage = Math.abs(minAge - ageRange);
console.log(minAverage);

const maxAverage = Math.max(maxAge - ageRange);
console.log(maxAverage);
