//?  ====Function Declaration===

sum1(4, 5); // ! hata vermez. fonks. tepeye alinir o yuzden bu sonuc hata vermez

function sum1(num1, num2) {
    return num1 + num2;
}

//? ====Function Expression===

//sum2(1, 2);//! hata verir. fonks tanimlanmadan fonks erisime izin vermez

const sum2 = (num1, num2) => {
    return num1 + num2;
};

//? ====Global Variable====

console.log(x);
var x = 5; // ! undefined verir.  let,const olsaydi hata verirdi.
