import { debounce } from 'lodash';
import './styles.css';
import API from './js/fetchCountries.js';
import renderCountryInfo from './js/render';
import getRefs from './js/refs';

const refs = getRefs();

// const debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(onInputChange, 500));

function onInputChange(e) {
       refs.countryWrap.innerHTML = '';
    e.preventDefault();
    const title = e.target.value;
    countryFetch(title);    
}

function countryFetch(title) {
    API.fetchCountries(title)
    .then(renderCountryInfo)
    .catch(error => {
        console.error('Error!!!', error);
    });   
}