// ! boş bir dizi yaratın;
/* const arr = [];
console.log(arr);
const arr2 = new Array();
console.log(arr2); */

//! Eleman sayısı 5'ten fazla olan bir dizi yaratın.
/* const arr = [2, 4, 'ali', 5, 890, 3.4, false];
console.log(arr); //[2, 4, 'ali', 5, 890, 3.4, false]; */

// ! Yarattığınız dizinin uzunluğunu bulun ( length ).
/* console.log(arr.length); //7 */

// ! Dizinizdeki ilk elemanı, ortadaki elemanı ve sondaki elemanı bulun.
/* console.log(arr[0]); //2
console.log(arr[arr.length - 1]); //false
console.log(arr[(arr.length - 1) / 2]); //5 */

// ! mixedDataTypes adında bir dizi yaratın,dizinin içine farklı veri
//! tiplerinde elemanlar koyun ve bu dizinin uzunluğunu bulun. Dizinin uzunluğu 5'ten büyük olmalıdır.
/* const mixedDataTypes=["String",false,3,0.6,undefined,null,true]
console.log(mixedDataTypes); */

//! ItCompanies adlı bir dizi değişkeni oluşturun ve
//! Facebook, Google, Microsoft, Apple, IBM, Oracle ve Amazon'a başlangıç değerleri atayın.
const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon',
];

//! console.log() kullanarak dizinizi yazdırın.
console.log(itCompanies); //['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//! Dizinin içindeki şirketlerin sayısın yazdırın.
console.log(itCompanies.length); //7

//! Dizinin içindeki ilk, ortadaki ve son elemanı yazdırın.
console.log(itCompanies[0]);
console.log(itCompanies[itCompanies.length - 1]);
console.log(itCompanies[(itCompanies.length - 1) / 2]);

//! Dizideki her şirketi yazdırın.
itCompanies.forEach(function (itCompanies) {
    console.log(itCompanies);
});

//! Her bir şirketin adını tek tek büyük harfleri ile değişterin
//! ( ör: facebook -> FACEBOOK) ve her birini yazdırın.
itCompanies.forEach(function (itCompanies) {
    console.log(itCompanies.toUpperCase());
});

//! Diziyi bir cümle gibi yazdırın: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString()); //Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon

//! itCompanies dizisinde belirli bir şirketin olup olmadığını kontrol edin.
//! Varsa şirketi geri döndürün, aksi takdirde not found geri döndürün.

/* function company2(company) {
    if (itCompanies.includes(company)) {
        return company;
    } else {
        return 'Not Found';
    }
}

console.log(company2('esra')); */

//! Birden fazla 'o' harfi içeren şirketleri filter metodunu kullanmadan filtreleyin.

/* let companyFilter = [];

for (let i = 0; i < itCompanies.length; i++) {
    let oNumber = 0;
    for (let j = 0; j < itCompanies[i].length; j++) {
        if (itCompanies[i][j].toLowerCase() == 'o') {
            oNumber++;
        }
    }
    if (oNumber > 1) {
        companyFilter.push(itCompanies[i]);
    }
}
console.log(companyFilter); */

// ! sort() metodunu kullanarak diziyi sıralayın.

/* console.log(itCompanies);
let shortCompany = itCompanies.sort();
console.log(shortCompany); */

//! reverse() metodunu kullanarak diziyi tersine çevirin.
//console.log(itCompanies.reverse());

//! Diziden ilk 3 şirketi dilimleyin ( Slice edin ).
/* console.log(itCompanies);
console.log(itCompanies.slice(0,3));  */

//! Diziden son 3 şirketi dilimleyin ( Slice edin ).
/* console.log(itCompanies);
console.log(itCompanies.slice(itCompanies.length - 3)); */

//! Ortadaki IT şirketini ya da şirketlerini diziden dilimleyin ( Slice edin ).
/* console.log(itCompanies);
const middleIndex = Math.floor(itCompanies.length / 2);
console.log(itCompanies[middleIndex]); //Apple */

//! İlk IT şirketini diziden kaldırın.
/* let deletedFirstCompany = itCompanies.shift();
console.log(itCompanies); */

//! Ortadaki IT şirketini ya da şirketlerini diziden kaldırın.
/* const middleIndex = Math.floor(itCompanies.length / 2);
const deletedMiddleCompany = itCompanies.splice(middleIndex, 1); // middleIndex te 1 tane sil dedik
console.log(itCompanies); */

//! Sondaki IT şirketini diziden kaldırın.
/* console.log(itCompanies);
const deletedEndCompany = itCompanies.pop();
console.log(itCompanies); */

//! Bütün IT şirketlerini kaldırın.
/* const deletedCompanies = itCompanies.splice(0, itCompanies.length);
console.log(itCompanies); */
