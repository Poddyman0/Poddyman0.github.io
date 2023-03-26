import { createElement } from '../../createElement.js'

export const createSortDropDownMenu = () => {
  const byYear = createElement(
    'p',
    {
      class: 'nav__button_text__dropdown',
      id: 'nav__button_text__dropdown_year',
    },
    'By Year'
  )
  const byTitle = createElement(
    'p',
    {
      class: 'nav__button_text__dropdown',
      id: 'nav__button_text__dropdown_title',
    },
    'By Title'
  )
  const byRating = createElement(
    'p',
    {
      class: 'nav__button_text__dropdown',
      id: 'nav__button_text__dropdown_rating',
    },
    'By Rating'
  )

  const dropDownContainer = createElement(
    'div',
    {
      class: 'nav__button_text__dropdown_container_HIDE',
      id: 'nav__button_text__dropdown_container',
    },
    byYear,
    byTitle,
    byRating
  )

  return dropDownContainer
}
