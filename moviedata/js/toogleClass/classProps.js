const classProps = {
  displayMovieNav: { id: 'moive_nav', display: true, append: '_HIDE' },
  hideMovieNav: { id: 'moive_nav', display: false, append: '_HIDE' },
  mainStretch: {
    id: 'page_container_flexbox',
    display: false,
    append: '__STRETCH',
  },
  mainShrink: {
    id: 'page_container_flexbox',
    display: true,
    append: '__STRETCH',
  },
  displaySortMoviesMenu: {
    id: 'nav__button_text__dropdown_container',
    display: true,
    append: '_HIDE',
  },
  hideSortMoviesMenu: {
    id: 'nav__button_text__dropdown_container',
    display: false,
    append: '_HIDE',
  },
  displaySortMoviesArrow: {
    id: 'nav_sort_pulldown_arrow',
    display: true,
    append: '_HIDE',
  },
  hideSortMoviesArrow: {
    id: 'nav_sort_pulldown_arrow',
    display: false,
    append: '_HIDE',
  },
};

export const {
  displayMovieNav,
  hideMovieNav,
  mainStretch,
  mainShrink,
  hidehomeImage,
  displayhomeImage,
  hideHomeFlexbox,
  displayHomeFlexbox,
  hideMoiveBrowserBtn,
  displayMoiveBrowserBtn,
  displaySortMoviesMenu,
  hideSortMoviesMenu,
  displaySortMoviesArrow,
  hideSortMoviesArrow,
} = classProps;
