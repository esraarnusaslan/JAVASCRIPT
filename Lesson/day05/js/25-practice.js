function showPrice() {
    const txtPrice = document.querySelector('#price');
    let price = Number(txtPrice.value);

    const txtResult = document.querySelector('#result');

    if (price > 500) {
        price *= 0.9;
    } else if (price > 300) {
        price *= 0.93;
    } else {
        price *= 0.95;
    }

    txtResult.innerHTML = `sonuc : ${price}`;
}
