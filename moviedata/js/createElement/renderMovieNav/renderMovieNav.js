import { removeAllChildNodes } from '../../helpers/removeAllChildNodes.js';
import { createElement } from '../createElement.js';

export const renderMovieNav = (movies) => {
  removeAllChildNodes('movie_nav__card_container');

  movies.forEach((movie) => {
    const { key, title, year, image } = movie;

    // create elements
    const img = createElement('img', {
      class: 'moive_nav__img',
      id: `moive_nav__img_${key}`,
      src: image,
      alt: `Moive Image ${title}`,
    });

    const movieYear = createElement('p', { class: 'moive_nav__film_year' }, year);
    const movieTitle = createElement('p', { class: 'moive_nav__title' }, title);
    const movieInfo = createElement('div', { class: 'moive_nav_info' }, movieTitle, movieYear);

    const anchor = createElement('a', { class: 'movie_nav__link', href: '#' }, img, movieInfo);

    const card = createElement('article', { class: 'movie_nav__card', id: `movie_nav__card__${key}` }, anchor);

    //render movie nav
    const movieNavContainer = document.getElementById('movie_nav__card_container');
    movieNavContainer.appendChild(card);
  });
};
