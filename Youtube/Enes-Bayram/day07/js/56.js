let product1 = {
    name: 'ACER Swift',
    category: 'Technology',
    price: 6.129,
}; //object

let product2 = {
    name: 'ACER Nitro 5',
    category: 'Technology',
    price: 15.475,
};

let product3 = {
    name: 'ACER Gaming',
    category: 'Technology',
    price: 13.999,
};
let product4 = {
    name: 'LENOVO V15',
    category: 'Technology',
    price: 10.999,
};
let product5 = {
    name: 'LENOVO V14',
    category: 'Technology',
    price: 4.399,
};
let product6 = {
    name: 'LENOVO V12',
    category: 'Technology',
    price: 6.399,
};
let product7 = {
    name: 'LENOVO Ideapad',
    category: 'Technology',
    price: 13.399,
};

let products = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
];
let filterProduct = [];
let userProductName = prompt('Please enter a product name');
getFilterProduct(products);
writeFilterProduct(filterProduct);

function getFilterProduct(products) {
    products.forEach(function (product) {
        if (
            product.name
                .toUpperCase()
                .includes(userProductName.toUpperCase(), 0)
        ) {
            filterProduct.push(product);
        } else {
            console.log('The product you are looking for is not available');
        }
    });
}

function writeFilterProduct(products) {
    products.forEach(function (product) {
        console.log('--------------------------------');
        console.log(
            '|' + product.name + '|' + product.price + '|' + product.category
        );
        console.log('--------------------------------');
    });
}
