const prices = [59, 60, 40, 90, -100];
if (prices.every((price) => price > 0)) {
    console.log('All prices are positive');
} else {
    console.log('Are not all prices positive');
}

if (prices.some((price) => price > 90)) {
    console.log('true');
}else{
    console.log("false");
}
