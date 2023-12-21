function setPrices() {
    const txtDiscountRate = document.getElementById('txtDiscountRate');
    const productList = document.querySelectorAll('#productList li span');
    const discountRate = Number(txtDiscountRate.value);

    for (let i = 0; i < productList.length; i++) {
        let price = productList[i].innerText;
        price = price - (price * discountRate) / 100;
        productList[i].innerText = price;
    }
}
