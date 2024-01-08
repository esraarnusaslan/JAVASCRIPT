function write() {
    console.log('write');
}

write();

const writeArrow = () => {
    console.log('write Arrow');
};
writeArrow();

const names = (firstName) => console.log('hello', firstName);
names('Tom');

const cup = (x) => x ** 3;
console.log(cup(3));//27
