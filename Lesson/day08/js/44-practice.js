const car = {
    brand: 'BMW',
    model: '5.21',
    color: 'red',
    year: 1968,
    engine: 'V8',
};

document.querySelector('#listCar').addEventListener('click', (e) => {
    const carKey = e.target.value;

    document.querySelector('#lblValue').innerHTML = car[carKey];
});

const fillList = () => {
    const carKeys = Object.keys(car);
    const listCar = document.querySelector('#listCar');
    let strHtml = '';

    for (let i = 0; i < carKeys.length; i++) {
        strHtml += `<option> ${carKeys[i]}</option>`;
    }
    listCar.innerHTML = strHtml;
};

fillList();
