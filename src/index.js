import './sass/main.scss';
import debounce from 'lodash.debounce';
// import cardMarkup from './templates/markupCard.hbs';
// import listMarkup from './templates/markupList.hbs';
import refs from './js/refs';
import fetchCountries from './js/fetchCountries';

refs.form.addEventListener('input', debounce(inputHandler, 500));

function inputHandler(event) {
  const searchQuery = event.target.value;
  // console.dir(event.target.value);
  refs.countryList.innerHTML = ''; // скинуть запрос
  refs.form.reset();    //очистить инпут

  fetchCountries(searchQuery);

  // const url = `https://restcountries.com/v2/name/${event.target.value}`;
  // fetch(url)
  //   .then(res => res.json())
  //   .then(data => {
  //     if ((data.length >= 2) & (data.length < 10)) {
  //       // const markup = listMarkup(data);
  //       // refs.countryList.insertAdjacentHTML('beforeend', markup);
  //     }

  //     if (data.length === 1) {
  //       console.dir(data);
  //       // const markup = cardMarkup(data);
  //       // refs.countryList.insertAdjacentHTML('beforeend', markup);
  //     }

  //     if (data.length > 10) {
  //       error({ text: 'Too many matches found. Please enter specific query!' });
  //     }
  //   });
}
