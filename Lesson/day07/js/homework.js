function show() {
    const txtNum = document.getElementById('txtNum');
    const txtResult = document.getElementById('result');
    const num = txtNum.value;
    const palindromeNum = isPalindrome(num);
    if (palindromeNum) {
        txtResult.innerHTML = `Number is a palindrome`;
    } else {
        txtResult.innerHTML = `Number is not a palindrome`;
    }
}

function isPalindrome(num) {
    const lineNum = num.toString();
    const lineLength = lineNum.length;
    for (let i = 0; i < Math.floor(lineLength / 2); i++) {
        if (lineNum[i] !== lineNum[lineNum.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
