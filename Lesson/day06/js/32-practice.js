function sum() {
    const txtNum = document.querySelector('#txtNum');
    let num = txtNum.value;
    console.log(typeof num); //string
    let total = 0;

    /*  while (num > 0) {
        const digit = num % 10;
        total += digit;
        num = Math.floor(num / 10);
    }
    */

    for (let i = 0; i < num.length; i++) {
        total += parseInt(num[i]); //string gelen num i number a cevirir.
    }
    document.querySelector('#result').innerHTML = total;
}
