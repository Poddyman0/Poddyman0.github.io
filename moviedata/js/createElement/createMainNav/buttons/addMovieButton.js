import { createNavButton } from '../createNavButton.js'

export const addMovieButton = createNavButton({
  containerClass: 'nav__buttton_container',
  containerId: 'nav__buttton_container__add_moive',
  imgClass: 'nav__button_icon',
  imgId: 'nav__button_icon__add_movie',
  imgSrc: './img/add.svg',
  imgAlt: 'Add Movie To Database',
  pClass: 'nav__button_text',
  pId: 'nav__button_text__add_movie',
  pText: 'Add Movie',
  arrow: false,
  dropDownMenu: false,
})
