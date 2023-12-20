function showPrice() {
    const txtPrice = document.getElementById('price');

    let price = Number(txtPrice.value);

    const elResult = document.getElementById('result');

    let discount;

    switch (true) {
        case price > 1500:
            discount = 15;
            break;
        case price > 1000:
            discount = 13;
            break;
        case price > 700:
            discount = 10;
            break;
        case price > 500:
            discount = 7;
            break;
        case price > 300:
            discount = 5;
            break;
        default:
            discount = 2;
    }

    price = price - (price * discount) / 100;
    elResult.innerHTML = `Price: ${price}`;
}
