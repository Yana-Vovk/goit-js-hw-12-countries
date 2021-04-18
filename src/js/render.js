import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import { info, success, error } from '@pnotify/core';
import countryTamplate from '../tamplates/country-markup.hbs';
import countryList from '../tamplates/country-list.hbs';
import getRefs from './refs';

const refs = getRefs();

function renderCountryInfo(country) {
    if (country.length > 10) {
       error({
         text: "Too many matches found. Please enter a more specific query!",
         delay: 2000,
         maxTextHeight: 0,
       }); 
    }

  if (country.length > 1 && country.length < 11) {
        info({
         text: "Please enter a more specific query to get full information",
         delay: 2000,
         maxTextHeight: 0,
        }); 
        const listMarkup = countryList(country);
        refs.countryWrap.innerHTML = listMarkup;
        console.log(listMarkup);
    }

  if (country.length === 1) {
      success({
         text: "You are provided with full information",
         delay: 2000,
         maxTextHeight: 0,
        }); 
         const countryMarkup = countryTamplate(country);
         refs.countryWrap.innerHTML = countryMarkup;
  }
  
  if (country.status === 404) {
    error({
         text: "Input valid search criteria",
         delay: 2000,
         maxTextHeight: 0,
       }); 
  }
  
//    refs.countryWrap.innerHTML = '';
}

export default renderCountryInfo;

