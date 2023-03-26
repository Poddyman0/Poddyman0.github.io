const movieData = {
  'The Darjeeling Limited': {
    plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
    cast: ['Jason Schwartzman', 'Owen Wilson', 'Adrien Brody'],
    runtime: 151,
    rating: 7.2,
    year: 2007,
    image: './img/01_the_darjeeling.jpg',
  },
  'The Royal Tenenbaums': {
    plot: 'The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons',
    rating: 7.6,
    year: 2001,
    cast: ['Gene Hackman', 'Gwnyeth Paltrow', 'Anjelica Huston'],
    runtime: 170,
    image: './img/02_the_royal_tenenbaums.jpg',
  },
  'Fantastic Mr. Fox': {
    year: 2009,
    plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
    cast: ['George Clooney', 'Meryl Streep', 'Bill Murray', 'Jason Schwartzman'],
    runtime: 147,
    rating: 7.9,
    image: './img/03_fantastic_mr_fox.jpg',
  },
  'The Grand Budapest Hotel': {
    rating: 8.1,
    runtime: 159,
    year: 2014,
    plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ['Ralph Fiennes', 'F. Murray Abraham', 'Mathieu Amalric'],
    image: './img/04_budapest_hotel.jpg',
  },
};

const movieDataArray = Object.entries(movieData);
export let cleanMovieData = [];

movieDataArray.forEach((movie, key) => {
  const cleanMovie = {
    key: key,
    title: movie[0],
    plot: movie[1].plot,
    cast: movie[1].cast,
    runtime: movie[1].runtime,
    rating: movie[1].rating,
    year: movie[1].year,
    image: movie[1].image,
  };
  cleanMovieData.push(cleanMovie);
});

export const setCleanMoiveData = (movieData) => {
  cleanMovieData = movieData;
};
