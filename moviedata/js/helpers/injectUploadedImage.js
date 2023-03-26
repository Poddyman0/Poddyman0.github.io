import { cleanMovieData } from "../movieData.js";
import { renderMovieNav } from "../createElement/renderMovieNav/renderMovieNav.js";
import { refreshMoviesNavEventListeners } from "../eventListeners.js";
import { addDatatoStorage } from "./localStorage.js";

export const injectUploadedImage = () => {
  const file = document.getElementById("form__image_upload").files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    cleanMovieData[0].image = reader.result;
    renderMovieNav(cleanMovieData);
    refreshMoviesNavEventListeners();
    addDatatoStorage();
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    renderMovieNav(cleanMovieData);
    refreshMoviesNavEventListeners();
    addDatatoStorage();
  }
};
