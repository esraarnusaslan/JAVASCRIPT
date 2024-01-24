const getData = () => {
    setTimeout(() => {
        console.log("Hello 1");
        return 'Data 2';
    });
    return "Hello 2"
};
console.log('Data 1'); 
const result = getData();
console.log(result);
console.log('Data 3'); 
