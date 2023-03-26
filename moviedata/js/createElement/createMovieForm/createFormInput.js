import { createElement } from '../createElement.js'

export const createFormInput = (inputType, inputAttributes) => {
  const formInput = createElement(inputType, {
    class: 'form_input__container',
    ...inputAttributes,
  })

  return formInput
}
