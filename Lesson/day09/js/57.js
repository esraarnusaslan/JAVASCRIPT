const tryPriceList = [5000, 7000, 9000, 12000, 500, 800];
const usd = 27.3;
const eur = 28.98;

const usdPriceList = tryPriceList.map((price) => (price / usd).toFixed(2));
console.log(usdPriceList);

const eurPriceList = tryPriceList.map((price) => (price / eur).toFixed(2));
console.log(eurPriceList);
