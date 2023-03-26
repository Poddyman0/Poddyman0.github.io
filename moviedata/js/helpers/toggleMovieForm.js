import { toggleMovieNav } from './toggleMovieNav.js';
import { renderMovieForm } from '../createElement/createMovieForm/renderMovieForm.js';
import { removeAllChildNodes } from './removeAllChildNodes.js';
import { toggleClass } from '../toogleClass/toogleClass.js';
import { mainStretch } from '../toogleClass/classProps.js';
import { onFormSubmit } from './onFormSubmit.js';
import { movieBrowserIsDisplayed } from './toggleMovieNav.js';

export const toggleMovieForm = () => {
  if (movieBrowserIsDisplayed) {
    toggleMovieNav();
  }

  removeAllChildNodes('main');
  toggleClass(mainStretch);
  renderMovieForm();

  const addMovieFilPicker = document.getElementById('form__image_upload');
  addMovieFilPicker.addEventListener('change', (event) => {
    const file = event.target.files[0].name;

    const fileNameElement = document.getElementById('form__input_file_text');
    fileNameElement.textContent = file;

    console.log('file', file);
  });

  const form = document.getElementById('form__container');
  form.addEventListener('submit', onFormSubmit);
};
