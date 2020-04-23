import './styles.css';
// debounce
import debounce from '../node_modules/lodash.debounce';
// PNotify
import { notice, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';

import fetchCoutries from './js/fetch-countries.js';
import updateCountriesMarkup from './js/update-countries-markup.js';

defaultModules.set(PNotifyMobile, {});

const refs = {
  inputRef: document.querySelector('#search-countries'),
  listRef: document.querySelector('.js-countriesList'),
  cardOfCountry: document.querySelector('.cardOfCountry'),
};
// debounce function

const debounceCountries = debounce(event => {
  refs.listRef.innerHTML = '';
  refs.cardOfCountry.innerHTML = '';

  const searchQuery = event.target.value;

  fetchCoutries(searchQuery)
    .then(updateCountriesMarkup)
    .catch(error => {
      notice({
        text: 'Вперед до пошуків!',
      });
    });
}, 500);

refs.inputRef.addEventListener('input', debounceCountries);
