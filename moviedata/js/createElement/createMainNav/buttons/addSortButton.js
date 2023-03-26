import { createNavButton } from '../createNavButton.js'

export const addSortButton = () => {
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
    dropDownMenu: false,
  })

  return sortMoviesButton
}
