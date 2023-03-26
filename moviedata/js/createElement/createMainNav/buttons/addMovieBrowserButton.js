import { createNavButton } from '../createNavButton.js';

export const addHideMovieBrowserButton = createNavButton({
  containerClass: 'nav__buttton_container',
  containerId: 'nav__buttton_container__toggle_movie_browser',
  imgClass: 'nav__button_icon',
  imgId: 'nav__button_icon__movie_browser',
  imgSrc: './img/hide.svg',
  imgAlt: 'Toggle Movie Browser',
  pClass: 'nav__button_text hide',
  pId: 'nav__button_text__hide_movie_browser',
  pText: 'Hide Movie Browser',
  arrow: false,
  dropDownMenu: false,
});

export const addShowMovieBrowserButton = createNavButton({
  containerClass: 'nav__buttton_container',
  containerId: 'nav__buttton_container__toggle_movie_browser',
  imgClass: 'nav__button_icon',
  imgId: 'nav__button_icon__movie_browser',
  imgSrc: './img/show.svg',
  imgAlt: 'Toggle Movie Browser',
  pClass: 'nav__button_text hide',
  pId: 'nav__button_text__hide_movie_browser',
  pText: 'Show Movie Browser',
  arrow: false,
  dropDownMenu: false,
});
