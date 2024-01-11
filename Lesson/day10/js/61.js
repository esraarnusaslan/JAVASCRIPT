import { countries } from '../data/countries.js';

document.querySelector('#ddlCountries').addEventListener('change', (e) => {
    const countryCode = e.target.value;
    console.log(countryCode);
    const country = getCountry(countryCode);
    console.log(country);
    loadTable(country);
    showTable();
});

const loadData = () => {
    countries.sort((a, b) => {
        const countryA = a.name.common.toUpperCase();
        const countryB = b.name.common.toUpperCase();
        if (countryA < countryB) {
            return -1;
        }
        if (countryA > countryB) {
            return 1;
        }
        return 0;
    });

    let options = ' <option value="" disabled selected>Choose One </option>';
    for (let country of countries) {
        options += ` <option value="${country.ccn3}">${country.name.common}</option>`;
    }
    const ddlCountries = document.querySelector('#ddlCountries');
    ddlCountries.innerHTML = options;
};

const loadTable = (country) => {
    const capitalCity = country.capital.join(' - ');
    console.log(capitalCity);

    const currency = Object.keys(country.currencies).join(' - ');
    console.log(currency);

    const language = Object.values(country.languages).join(' - ');
    console.log(language);

    const area = country.area;

    const mapLink = `<a href="https://www.google.com/maps/place/${country.latlng.toString()}" target="_blank">Go to map</a>`;

    document.querySelector('#tblCountries tr:nth-child(1) td').innerHTML =
        capitalCity;
    document.querySelector('#tblCountries tr:nth-child(2) td').innerHTML =
        currency;
    document.querySelector('#tblCountries tr:nth-child(3) td').innerHTML =
        language;
    document.querySelector(
        '#tblCountries tr:nth-child(4) td'
    ).innerHTML = `${area} km<sup>2</sup>`;
    document.querySelector('#tblCountries tr:nth-child(5) td').innerHTML =
        mapLink;
};

const showTable = () => {
    document.querySelector('#tblCountries').classList.remove('d-none');
};

const getCountry = (countryCode) => {
    const filteredCountries = countries.filter(
        (country) => country.ccn3 == countryCode
    );
    return filteredCountries.length > 0 ? filteredCountries[0] : null;
};

const setTotalArea = (area) => {
    document.querySelector('#totalArea').innerHTML = `${area.toFixed(
        2
    )} km<sup>2</sup>`;
};

const cnt = getCountry(798);
console.log(cnt);
loadTable(cnt);

const getTotalArea = () => {
    const totalArea = countries.reduce(
        (total, country) => total + country.area,
        0
    );
    return totalArea;
};

loadData();

const totalArea = getTotalArea();
setTotalArea(totalArea);
