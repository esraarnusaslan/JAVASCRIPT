import { countries } from '../data/countries.js';

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
    let options = '';
    for (let country of countries) {
        options += ` <option>${country.name.common}</option>`;
    }
    const ddlCountries = document.querySelector('#ddlCountries');
    ddlCountries.innerHTML = options;
    return ddlCountries;
};
loadData();
