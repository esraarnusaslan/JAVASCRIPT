let product = document.getElementById('product');
let price = document.getElementById('price');
let message = document.getElementById('message');

document.getElementById('calculate').addEventListener('click', () => {
    let productValue = product.value;
    let priceValue = Number(price.value);

    let counter = 1;
    let sum = 0;

    do {
        sum = counter * priceValue;
        if (sum > 1500) {
            sum -= priceValue;
            counter--;
            break;
        }
        counter++;
    } while (sum <= 1500);
    message.innerText=`Number of products : ${counter} Sum of products : ${sum}`
});
