import { updateCardMarkup, updateListMarkup } from './markup';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error } from '@pnotify/core';
// const {error} = require('@pnotify/core');

function fetchCountries(searchQuery) {
  const url = `https://restcountries.com/v2/name/${searchQuery}`;
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      if ((data.length >= 2) & (data.length < 10)) {
        updateListMarkup(data);
      }

      if (data.length === 1) {
        updateCardMarkup(data);
      }

      if (data.length > 10) {
        error({ text: 'Too many matches found. Please enter specific query!' });
      }
    });
}

export default fetchCountries;
