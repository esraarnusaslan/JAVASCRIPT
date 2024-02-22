const cities = [];
const txtNewCity = document.getElementById('txtNewCity');
const btnAddCity = document.getElementById('btnAddCity');
const btnSort = document.getElementById('btnSort');
const btnReserve = document.getElementById('btnReserve');
const btnRemoveFirst = document.getElementById('btnRemoveFirst');
const btnRemoveLast = document.getElementById('btnRemoveLast');
const btnRemoveAll = document.getElementById('btnRemoveAll');
const btnRemoveMix = document.getElementById('btnRemoveMix');
const listCities = document.getElementById('listCities');

const addCity = (city) => {
    if (!city) return;
    if (cities.includes(city)) return;
    cities.push(city);
};

const sortCities = () => {
    cities.sort((a, b) => a.localeCompare(b));
};

const reverseCities = () => {
    cities.reverse();
};

const renderCities = () => {
    listCities.innerHTML = '';
    cities.forEach((city) => {
        listCities.innerHTML += `<li class="list-group-item">${city}</li>`;
    });
};

const removeFirstCity = () => {
    cities.shift();
};

const removeLastCity = () => {
    cities.pop();
};

const removeAllCities = () => {
    cities.splice(0, cities.length);
};

const mixCities = () => {
    cities.sort(() => 0.5 - Math.random());
};

btnAddCity.addEventListener('click', () => {
    const city = txtNewCity.value;
    addCity(city);
    renderCities();
    txtNewCity.value = '';
    txtNewCity.focus();
});

txtNewCity.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        btnAddCity.click();
    }
});

btnSort.addEventListener('click', () => {
    sortCities();
    renderCities();
});

btnReserve.addEventListener('click', () => {
    reverseCities();
    renderCities();
});

btnRemoveFirst.addEventListener('click', () => {
    removeFirstCity();
    renderCities();
});

btnRemoveLast.addEventListener('click', () => {
    removeLastCity();
    renderCities();
});

btnRemoveAll.addEventListener('click', () => {
    removeAllCities();
    renderCities();
});

btnRemoveMix.addEventListener('click', () => {
    mixCities();
    renderCities();
});
