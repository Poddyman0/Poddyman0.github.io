import { createElement } from '../createElement.js'

export const createFormHeader = () => {
  const formImage = createElement('img', {
    class: 'form_play_img',
  })

  const formH2 = createElement(
    'h2',
    { class: 'form__h2' },
    'Add Movie to Database'
  )

  const formHeader = createElement(
    'div',
    { class: 'form__header' },
    formImage,
    formH2
  )

  return formHeader
}
