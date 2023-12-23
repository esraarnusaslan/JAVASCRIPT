//

const getLastPrice = (price, tax, discount) => {
    price ??= 0; //price null ya da undefined gelirse 0 yap.
    tax ??= 0;
    discount ??= 0;

    if (discount <= 0) {
        tax = 0;
    }

    if (price >= 1500) {
        discount += 10;
    }

    const totalTax = price * (tax / 100);
    const totalDiscount = price * (discount / 100);
    const result = price + totalTax - totalDiscount;
    return result;
};

const onGetLastPriceClick = () => {
    const txtNum = document.getElementById('txtNum');
    let num = Number(txtNum.value);
    const txtTax = document.getElementById('txtTax');
    let tax = Number(txtTax.value);
    const txtDiscount = document.getElementById('txtDiscount');
    let discount = Number(txtDiscount.value);

    const result = getLastPrice(num, tax, discount);
    alert(result);
};
