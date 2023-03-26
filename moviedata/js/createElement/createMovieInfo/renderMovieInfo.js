import { cleanMovieData } from '../../movieData.js';
import { toggleClass } from '../../toogleClass/toogleClass.js';
import { mainStretch } from '../../toogleClass/classProps.js';
import { checkIsMobile } from '../../helpers/isMobile.js';
import { toggleMovieNav } from '../../helpers/toggleMovieNav.js';
import { removeAllChildNodes } from '../../helpers/removeAllChildNodes.js';
import { createMovieInfoElements } from './createMovieInfoElements.js';

export const renderMoiveInfo = (event) => {
  removeAllChildNodes('main');
  const isMobile = checkIsMobile();
  if (isMobile) {
    toggleMovieNav();
    toggleClass(mainStretch);
  }

  const targetId = event.currentTarget.id;
  const regEx = /\d+/;
  const movieKey = parseInt(targetId.match(regEx)[0]);

  const findMoive = cleanMovieData.filter((movie) => {
    if (movie.key === movieKey) {
      return movie;
    }
  });
  const movie = findMoive[0];

  createMovieInfoElements(movie);
};
