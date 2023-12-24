const arr = [12, 3, 56, 789, 32, 3];

const getMaxNumber = (arr) => {
    if (!Array.isArray(arr) || arr.length <= 0) {
        return;
    }

    let maxNum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
};

const maximumNumber = getMaxNumber(arr);
console.log(maximumNumber);

/* getMaxNumber();
getMaxNumber('');
getMaxNumber(null);
getMaxNumber('hello');
getMaxNumber(4);
getMaxNumber([]); 
getMaxNumber(arr);
*/
