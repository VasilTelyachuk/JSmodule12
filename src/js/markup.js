import cardMarkup from '../templates/markupCard.hbs';
import listMarkup from '../templates/markupList.hbs';
import refs from './refs';

function updateCardMarkup(counntriesList) {
  const markup = cardMarkup(counntriesList);
  refs.countryList.insertAdjacentHTML('beforeend', markup);
}

function updateListMarkup(counntriesList) {
  const markup = listMarkup(counntriesList);
  refs.countryList.insertAdjacentHTML('beforeend', markup);
}

export { updateCardMarkup, updateListMarkup };
