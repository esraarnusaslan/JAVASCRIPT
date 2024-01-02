const products = [
    {
        id: 1,
        name: 'laptop',
        price: 3000,
    },
    {
        id: 2,
        name: 'phone',
        price: 5000,
    },

    {
        id: 3,
        name: 'mobile',
        price: 700,
    },

    {
        id: 4,
        name: 'watch',
        price: 500,
    },
];

const newProduct = products.map((product) => {
    if (product.price > 1000) {
        product.price *= 1.1;
    } else {
        product.price *= 1.15;
    }
    product.price = product.price.toFixed(2);
    return product;
});
console.log(newProduct);
