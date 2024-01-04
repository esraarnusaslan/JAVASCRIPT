//! ==================== DATE ====================

let date2 = new Date(1992, 3, 11, 10, 40, 50);
console.log(date2); //Sat Apr 11 1992 10:40:50 GMT+0300 (GMT+03:00)

let date = new Date(); //object
console.log(date);
console.log(typeof date.toString()); //string

//GET
console.log(date.getHours());
console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getDay()); //ayin kacinci gunu
console.log(date.getDay()); //haftanin kacinci gunu
console.log(date.getMilliseconds());
console.log(date.getMonth()); //aylar 0 dan baslar
console.log(date.getSeconds());
console.log(date.getTime());
console.log(date.toLocaleDateString()); //04.01.2024
console.log(date.toLocaleTimeString()); //14:11:56
console.log(date.toLocaleString()); //04.01.2024 14:12:06

//SET
console.log(date); //Thu Jan 04 2024 14:12:51 GMT+0300 (GMT+03:00)
date.setDate(24);
console.log(date); //Wed Jan 24 2024 14:13:02 GMT+0300 (GMT+03:00)
date.setHours(date.getHours() + 2); // su anki saate 2 saat ekle dedik
console.log(date); //Wed Jan 24 2024 16:14:48 GMT+0300 (GMT+03:00)
