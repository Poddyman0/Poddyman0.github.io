import { renderMoiveInfo } from './createElement/createMovieInfo/renderMovieInfo.js';
import { navigationLeft, navigationRight } from './helpers/movieNavigation.js';
import { toggleSortMovieMenu } from './helpers/toogleSortMovieMenu.js';
import { toggleMovieNav } from './helpers/toggleMovieNav.js';
import { sortField } from './helpers/sortMovies.js';
import { toggleMovieForm } from './helpers/toggleMovieForm.js';

export const addEventListeners = () => {
  const addMovie = document.getElementById('nav__buttton_container__add_moive');
  addMovie.addEventListener('click', toggleMovieForm);

  const toggleMoiveBrowser = document.getElementById('nav__buttton_container__toggle_movie_browser');
  toggleMoiveBrowser.addEventListener('click', toggleMovieNav);

  const movieNavLeft = document.getElementById('moive_nav__left');
  movieNavLeft.addEventListener('click', navigationLeft);

  const movieNavRight = document.getElementById('moive_nav__right');
  movieNavRight.addEventListener('click', navigationRight);

  const sortMovieDropdown = document.getElementById('nav__buttton_container__sort_movies_dropdown');
  sortMovieDropdown.addEventListener('click', toggleSortMovieMenu);

  const findMovieSortMenuItems = document.getElementsByClassName('nav__button_text__dropdown');
  const movieSortMenuItems = [...findMovieSortMenuItems];
  movieSortMenuItems.forEach((element) => {
    element.addEventListener('click', sortField);
  });

  refreshMoviesNavEventListeners();
};

export const refreshMoviesNavEventListeners = () => {
  const movies = document.getElementsByClassName('movie_nav__card');
  const moiveElements = [...movies];
  moiveElements.forEach((element) => {
    element.addEventListener('click', renderMoiveInfo);
  });
};
