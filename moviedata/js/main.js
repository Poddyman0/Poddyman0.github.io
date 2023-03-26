import { cleanMovieData } from './movieData.js';
import { renderMovieNav } from './createElement/renderMovieNav/renderMovieNav.js';
import { addEventListeners } from './eventListeners.js';
import { getDataFromStorage } from './helpers/localStorage.js';
import { renderMainNav } from './createElement/createMainNav/renderMainNav.js';
import { renderHomePage } from './createElement/createHomePage/renderHomePage.js';
import { checkIsMobile } from './helpers/isMobile.js';
import { toggleMovieNav } from './helpers/toggleMovieNav.js';

const loadDesktopPage = () => {
  renderMainNav();
  renderHomePage();
  getDataFromStorage();
  renderMovieNav(cleanMovieData);
  addEventListeners();
};

const loadMobilePage = () => {
  renderMainNav();
  getDataFromStorage();
  renderMovieNav(cleanMovieData);
  toggleMovieNav();
  renderHomePage();
  addEventListeners();
};

const isMobile = checkIsMobile();
isMobile ? loadMobilePage() : loadDesktopPage();

// setInterval(() => {
//   console.log('window.innerWidth', window.innerWidth);
//   console.log('window.innerHeight', window.innerHeight);
// }, 3000);
