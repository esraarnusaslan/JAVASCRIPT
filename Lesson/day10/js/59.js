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
    {
        id: 5,
        name: 'mouse',
        price: 600,
    },
    {
        id: 6,
        name: 'monitor',
        price: 500,
    },
];

const filterProducts = (c) => {
    debugger
    const filteredProducts = products.filter((product) =>
        product.name.startsWith(c)
    );
    return filteredProducts;
};

console.log(filterProducts('m'));
