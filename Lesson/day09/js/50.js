const arr = [1, 89, 4, -3, -67, -20, 6];

const result = (arr) => {
    let positive = 0;
    let negative = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negative += arr[i];
        } else {
            positive += arr[i];
        }
    }
    return positive - negative;
};

console.log(result(arr));
