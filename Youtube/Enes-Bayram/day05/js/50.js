let binary = '1011';
function convertBinaryToDecimal(binary) {
    let sum = 0;
    let us = 0;
    for (let i = binary.length - 1; i >= 0; i--) {
        if (Number(binary.charAt(i)) != 0) {
            sum += Number(binary.charAt(i)) * Math.pow(2, us);
        }
        us++;
    }
    console.log(sum);
}
convertBinaryToDecimal(binary);
