// import './js/markup';
import './sass/main.scss';
import debounce from 'lodash.debounce';
// import './js/fetchCountries';
import './js/refs';
import cardMarkup from './templates/markupCard.hbs';
import refs from './js/refs';

// const formRef = document.querySelector('.js-form');

refs.form.addEventListener('input', debounce(inputHandler, 500));

function inputHandler(event) {
  fetch(`https://restcountries.com/v2/name/${event.target.value}`)
    .then(res => res.json())
    .then(data => {
      if ((data.length >= 2) & (data.length < 10)) {
        console.log('list');
      }

      if (data.length === 1) {
        console.dir(data);

        const markup = cardMarkup(data);
        refs.articles.insertAdjacentHTML('beforeend', markup);
      }

      if (data.length > 10) {
        console.log('error');
      }
    });
}
