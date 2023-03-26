import { createElement } from '../createElement.js'
import { createFormHeader } from './createFormHeader.js'
import { createFormInputs } from './createFormInputs.js'

export const renderMovieForm = () => {
  const formHeader = createFormHeader()
  const formInputs = createFormInputs()

  const formContainer = createElement(
    'form',
    {
      class: 'form__container',
      id: 'form__container',
    },
    formHeader,
    formInputs
  )

  const main = document.getElementById('main')
  main.appendChild(formContainer)
}
