import { countries_data } from '../data/countries_data.js';

const header = document.querySelector('header');
const h2 = document.querySelector('h2');
const h3 = Array.from(document.querySelectorAll('h3'));
console.log(h3);
const h4 = document.querySelector('h4');
const col = Array.from(document.querySelectorAll('.col'));

//! header
header.style.textAlign = 'center';
header.style.marginTop = '0';


//! h2
h2.style.fontSize = '70px';
h2.style.margin="0"
h2.style.letterSpacing = '10px';

//! h4
h4.style.fontWeight = '900';
h4.style.fontSize = '20px';
h4.style.paddingTop = '0';

//! h3
h3.forEach((h3) => {
    h3.style.fontWeight = 'lighter';
    h3.style.fontSize = '15px';
});

//! loadCountries

const totalCountries = countries_data.length;
console.log(totalCountries); //250

const loadCountries = () => {
    let countriesAll = '';
    countries_data.forEach((country) => {
        countriesAll += `<div class="country">${country.name}</div>`;
    });
    document.querySelector('.countries-wrapper').innerHTML = countriesAll;
};

loadCountries();
