const map1 = new Map();

//set()
map1.set(1, 'Tom');
map1.set(true, 5);
map1.set(false, '3');
map1.set([1, 2, 3], { firstName: 'Tom', lastName: 'Doe' });
map1.set(34, 'ABD');
map1.set(32, 'England');
map1.set(30, 'Canada');


//get
console.log(map1.get(34)); //ABD
console.log(map1.get('30')); //undefined

console.log(map1.get(23)); //undefined
const value = map1.get(32);
console.log(value); //England

let value2;
//value2=map1.size//7
//value2=map1.delete(32)//true.Varsa true yoksa false doner.
//console.log(map1.size);
//console.log(map1.has(32)); //varsa true yoksa false doner. Var mi yok mu diye soruyor

for (let [key, value] of map1) {
    console.log(key, value);
}

const keys = Array.from(map1.keys());
console.log(keys); //MapIterator{1, true, false, Array(3), 34,…}.Array.from yapmadan once boyleydi.clg hata veriyordu.

keys.forEach((key) => {
    console.log(key, map1.get(key));
}); //yukarisi array olmazsa hata veriyor.
