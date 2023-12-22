function factorial() {
    const txtNum = document.getElementById('txtNum');
    const result = document.getElementById('result');
    let num = Number(txtNum.value);

    //4!--> 4*3*2*1

    let total = 1;

    if (num < 0) {
        alert('please enter a positive number');
        txtNum.value = '';
        result.innerHTML = '';
        txtNum.focus();
        return;
    } else if (num === 0) {
        num = 1;
    } else {
        do {
            total *= num;
            num--;
        } while (num > 1);
    }
    document.querySelector('#result').innerHTML = total;
}
