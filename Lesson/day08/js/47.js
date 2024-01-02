const arr = [12, 3, 56, 789, 32, 3];

const setPrices = (arr, rate) => {
    if (!Array.isArray(arr) || arr.length <= 0) {
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + (arr[i] * rate) / 100;
    }
    return arr;
};

const newArr = setPrices(arr, 20);
console.log('new arr:', newArr);
