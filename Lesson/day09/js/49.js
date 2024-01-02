const animals = ['cat', 'dog', 'mouse', 'spider'];

console.log(animals.includes('cat')); //true
console.log(animals.join('-'));
console.log(animals.slice(2)); //mouse, spider
console.log(animals.toString()); //cat,dog,mouse,spider
console.log(animals.indexOf('dog')); //1
console.log(animals.indexOf('aaa')); //-1
console.log(animals.concat([1, 2])); //['cat', 'dog', 'mouse', 'spider', 1, 2]
