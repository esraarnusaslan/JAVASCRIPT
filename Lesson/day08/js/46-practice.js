const arr = [2, 5, 890, 100];

const getMaxNumber = (arr) => {
    if (!Array.isArray(arr) || arr.length <= 0) {
        console.log('array is empty');
    } else {
        let maxNum = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > maxNum) {
                maxNum = arr[i];
            }
        }
        console.log(`${maxNum}`);
    }
};

getMaxNumber(arr);

/* getMaxNumber();
getMaxNumber('');
getMaxNumber(null);
getMaxNumber('hello');
getMaxNumber(4);
getMaxNumber([]); 
getMaxNumber(arr); */
