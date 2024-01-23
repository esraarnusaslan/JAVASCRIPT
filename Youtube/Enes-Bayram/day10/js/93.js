const set = new Set();

//add
set.add('hello');
set.add(3.14);
set.add(true);
set.add(7);
set.add(7);
set.add(7);
set.add(7);
set.add({ username: 'tom', password: '1' });
set.add([1, 2, 3]);

//size
console.log(set.size); //6

//! setler de bir deger sadece bir kere tutulur.

//delete
set.delete('hello');
console.log(set.size); //5
//! obje ve diziyi delete ile silemezsin

//has()
console.log(set.has('hello')); //false cunku yukarida sildik.
//! obje ve diziyi has  ile soramazsin

//for-of
for (const value of set) {
    console.log(value);
}

//set ten array olusturma
const value = Array.from(set);

//array den set olusturmak
let array=[1,"tom",[1,2,3],3.14]
const newSet=new Set(array)
console.log(newSet);

//for each
console.log(value);
value.forEach((value) => {
    console.log(value);
});
