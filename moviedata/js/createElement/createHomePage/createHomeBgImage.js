import { createElement } from '../createElement.js'

export const createHomeBgImage = () => {
  const backgroundImage = createElement('img', {
    class: 'home__bg_img',
    id: '  id="home__bg_img',
    src: './img/movie_bg8.png',
    alt: 'movie clapper board and light',
  })

  return backgroundImage
}
