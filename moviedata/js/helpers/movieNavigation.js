import { cleanMovieData } from "../movieData.js";
import { renderMovieNav } from "../createElement/renderMovieNav/renderMovieNav.js";
import { refreshMoviesNavEventListeners } from "../eventListeners.js";

export const navigationRight = () => {
  const firstMovie = cleanMovieData.shift();
  cleanMovieData.push(firstMovie);
  renderMovieNav(cleanMovieData);
  refreshMoviesNavEventListeners();
};

export const navigationLeft = () => {
  const lastMovie = cleanMovieData.pop();
  cleanMovieData.unshift(lastMovie);
  renderMovieNav(cleanMovieData);
  refreshMoviesNavEventListeners();
};
