import { cleanMovieData } from "../movieData.js";
import { renderMovieNav } from "../createElement/renderMovieNav/renderMovieNav.js";
import { refreshMoviesNavEventListeners } from "../eventListeners.js";

let sortLowToHigh = false;
let sortBy = { field: "year", sortType: "number" };
const sortProps = {
  year: { field: "year", sortType: "number" },
  title: { field: "title", sortType: "text" },
  rating: { field: "rating", sortType: "number" },
};

export const sortField = (event) => {
  const sortField = event.target.id.substring(27);
  sortBy = sortProps[sortField];
  sortMovies();
};

export const sortMovies = (event) => {
  const { field, sortType } = sortBy;
  sortType === "number" ? sortByNumber(field) : sortByText(field);

  sortLowToHigh = !sortLowToHigh;
  renderMovieNav(cleanMovieData);
  refreshMoviesNavEventListeners();
};

const sortByNumber = (field) => {
  if (sortLowToHigh) {
    cleanMovieData.sort((a, b) => {
      return b[field] - a[field];
    });
  }

  if (!sortLowToHigh) {
    cleanMovieData.sort((a, b) => {
      return a[field] - b[field];
    });
  }
};

const sortByText = (field) => {
  if (sortLowToHigh) {
    cleanMovieData.sort((a, b) => {
      let x = a[field].toLowerCase();
      let y = b[field].toLowerCase();
      if (x < y) {
        return 1;
      }
      if (x > y) {
        return -1;
      }
      return 0;
    });
  }

  if (!sortLowToHigh) {
    cleanMovieData.sort((a, b) => {
      let x = a[field].toLowerCase();
      let y = b[field].toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
  }
};
