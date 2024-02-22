const products = [
    { product_id: 'KL111', product_name: 'Keyboard', price: 250 },
    { product_id: 'MN111', product_name: 'Monitor', price: 2250 },
    { product_id: 'MS111', product_name: 'Mouse', price: 150 },
    { product_id: 'PR111', product_name: 'Printer', price: 1250 },
    { product_id: 'SC111', product_name: 'Scanner', price: 750 },
    { product_id: 'HP111', product_name: 'Speaker', price: 450 },
];

const uploadProducts = () => {
    let line = '';
    for (let product of products) {
        line += `<tr>
        <td>${product.product_id}</td>
        <td>${product.product_name}</td>
        <td>${product.price}</td>
        </tr>`;
    }
    document.querySelector('#tblSales tbody').innerHTML = line;
};

uploadProducts();

let totalAmount = products.reduce((x, y) => x + y.price, 0);
document.querySelector('.totalAmount').innerHTML = totalAmount;

document.querySelectorAll('#tblSales tbody tr').forEach((line) => {
    line.addEventListener('click', () => {
        let product_id = line.querySelector('td:first-child').innerText;
        uploadProduct(product_id);
    });
});

const uploadProduct = (productId) => {
    const product = products.filter((item) => item.product_id == productId)[0];
    const productHtml = `
    <div class="card-body">
    <div class="row">
    <div class="col-md-4">Product Name: ${product.product_name}</div>
    <div class="col-md-4">Product Price: ${product.price}</div>
    </div>
    </div>`;

    document.querySelector('#sales').innerHTML = productHtml;
};
