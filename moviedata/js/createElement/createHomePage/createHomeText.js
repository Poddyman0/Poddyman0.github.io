import { createElement } from '../createElement.js';

export const createHomeText = () => {
  const h2 = createElement('h2', { class: 'homepage_text__h2' }, 'Use the menu to browse the latest movies...');

  const span = createElement('span', { class: 'homepage_text__h1_span' }, 'YOU');
  const h1 = createElement('h1', { class: 'homepage_text__h1' }, 'MOVIE PREVIEWS FOR ', span);

  const textHeaderDiv = createElement('div', { class: 'homepage_text__header_div' }, h1, h2);

  const section = createElement(
    'section',
    {
      class: 'homepage_text',
      id: 'homepage_text',
    },
    textHeaderDiv
  );

  return section;
};
