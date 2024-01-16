import { countries } from '../data/countries.js';

let timeOut = null;

const filterData = (value) => {
    if (!value) return [];
    const filteredData = countries.filter((country) =>
        country.name.common.toLowerCase().includes(value.toLowerCase())
    );
    return filteredData;
};

const setResultList = (filteredData) => {
    const result = document.getElementById('results');
    result.innerHTML = '';
    filteredData.forEach((item) => {
        const li = document.createElement('li');
        li.innerText = item.name.common;
        result.appendChild(li);
    });
};

document.getElementById('txtSearch').addEventListener('input', (e) => {
    if (timeOut) clearTimeout(timeOut);
    timeOut = setTimeout(() => {
        const filteredData = filterData(e.target.value);
        setResultList(filteredData);
    }, 500);
});
