import { createElement } from '../createElement.js';
import { addEventListeners } from '../../eventListeners.js';
import { addMovieButton } from './buttons/addMovieButton.js';
import { addHideMovieBrowserButton } from './buttons/addMovieBrowserButton.js';
import { createNavButton } from './createNavButton.js';
import { createSortDropDownMenu } from './buttons/createSortDropDownMenu.js';

export const renderMainNav = () => {
  const addMovieBtn = addMovieButton;
  const movieBrowserBtn = addHideMovieBrowserButton;

  const sortDropDownMenu = createSortDropDownMenu();

  const sortMoviesButton = createNavButton({
    containerClass: 'nav__buttton_container',
    containerId: 'nav__buttton_container__sort_movies_dropdown',
    imgClass: 'nav__button_icon',
    imgId: 'nav__button_icon__sort_movies',
    imgSrc: './img/sort.svg',
    imgAlt: 'Sort Movies',
    pClass: 'nav__button_text hide',
    pId: 'nav__button_text__sort_moives',
    pText: 'Sort Moives',
    arrow: true,
    dropDownMenu: sortDropDownMenu,
  });

  const navFlexbox = createElement(
    'nav',
    {
      id: 'nav__flexbox',
      class: 'nav__flexbox',
    },
    addMovieBtn,
    movieBrowserBtn,
    sortMoviesButton
  );

  const headerContainer = document.getElementById('header__container');
  headerContainer.appendChild(navFlexbox);

  addEventListeners();
};
