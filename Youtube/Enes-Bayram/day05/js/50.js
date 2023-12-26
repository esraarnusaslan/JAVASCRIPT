let binary = '1101011';
function convertBinaryToDecimal(binary) {
    let sum = 0;
    let us = 0;
    for (let i = binary.length - 1; i >= 0; i--) {
        sum += Number(binary.charAt(i)) * Math.pow(2, us);
        us++;
    }
    console.log(sum);
}
convertBinaryToDecimal(binary);
