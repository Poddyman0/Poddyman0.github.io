import { toggleClass } from "../toogleClass/toogleClass.js";
import {
  displaySortMoviesMenu,
  hideSortMoviesMenu,
  displaySortMoviesArrow,
  hideSortMoviesArrow,
} from "../toogleClass/classProps.js";

let menuOpen = false;

export const toggleSortMovieMenu = (event) => {
  const showMenu = () => {
    toggleClass(hideSortMoviesArrow);
    toggleClass(displaySortMoviesMenu);
  };

  const hideMenu = () => {
    toggleClass(displaySortMoviesArrow);
    toggleClass(hideSortMoviesMenu);
  };

  menuOpen ? hideMenu() : showMenu();

  menuOpen = !menuOpen;
};
