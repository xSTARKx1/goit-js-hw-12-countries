import listOfCountries from '../templates/listOfCountries.hbs';
import cardOfCountry from '../templates/cardOfCountry.hbs';
import { error } from '@pnotify/core';

const refs = {
  listRef: document.querySelector('.js-countriesList'),
  cardOfCountry: document.querySelector('.cardOfCountry'),
};

function updateCountriesMarkup(countries) {
  if (countries.length > 10) {
    error({
      title: 'Помилка!',
      text: 'Надто багато збігів! Напишіть щось більш специфічне!',
    });
    return;
  }

  if (countries.status === 404) {
    error({
      title: 'Помилка!',
      text: 'Такої країни не знайдено :( Спробуйте ще раз!',
    });

    return;
  }

  const markup = listOfCountries(countries);

  refs.listRef.insertAdjacentHTML('beforeend', markup);

  if (countries.length === 1) {
    refs.listRef.innerHTML = '';
    const markupCard = cardOfCountry(countries);

    refs.cardOfCountry.insertAdjacentHTML('beforeend', markupCard);
  }
}

export default updateCountriesMarkup;
