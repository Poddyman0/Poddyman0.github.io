<html>
  <head>
    <script>
      function fetchData() {
        fetch('JavaScript3.js')
          .then(response => response.json())
          .then(data => renderMovieData(data));
      }

      function renderMovieData(data) {
        const movieData = document.querySelector('#movie-data');

        for (const q of data) {
          const movieCard = document.createElement('div');
          movieCard.className = 'movie-card';

          const movie = document.createElement('div');
          movie.className = 'movie';

          const plotValue = document.createElement('p');
          plotValue.className = 'plot-value';
          plotValue.textContent = q.plot;

          const castValue = document.createElement('p');
          castValue.className = 'cast-value';
          castValue.textContent = q.cast;

          const runtimeValue = document.createElement('p');
          runtimeValue.className = 'runtime-value';
          runtimeValue.textContent = q.runtime;

          const ratingValue = document.createElement('p');
          ratingValue.className = 'rating-value';
          ratingValue.textContent = q.rating;

          const yearValue = document.createElement('p');
          yearValue.className = 'year-value';
          yearValue.textContent = q.year;

          const deleteButton = document.createElement('button');
          deleteButton.className = 'btn btn-danger';
          deleteButton.textContent = 'Delete';
          deleteButton.addEventListener('click', () => deleteQuote(q.id));

          movie.appendChild(plotValue);
          movie.appendChild(castValue);
          movie.appendChild(runtimeValue);
          movie.appendChild(ratingValue);
          movie.appendChild(yearValue);
          movie.appendChild(deleteButton);

          movieCard.appendChild(movie);
          movieData.appendChild(movieCard);
        }
      }

      function deleteQuote(id) {
        const src = 'JavaScript3.js';
        const reqObj = { method: 'DELETE' };
        fetch(src + '/' + id, reqObj)
          .then(() => {
            const movieCard = document.querySelector(`[data-id='${id}']`);
            movieCard.remove();
          });
      }

      function postMovie(e) {
        e.preventDefault();
        const newMovie = document.querySelector('#new-movie').value;
        const newPlot = document.querySelector('#new-plot').value;
        const newCast = document.querySelector('#new-cast').value;
        const newRuntime = document.querySelector('#new-runtime').value;
        const newRating = document.querySelector('#new-rating').value;
        const newYear = document.querySelector('#new-year').value;

        const src = 'JavaScript3.js';
        const reqObj = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            movie: newMovie,
            plot: newPlot,
            cast: newCast,
            runtime: newRuntime,
            rating: newRating,
            year: newYear
          })
        };
        fetch(src, reqObj)
          .then(resp => resp.json())
          .then(movie => {
            const movieData = document.querySelector('#movie-data');
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            movieCard.dataset.id = movie.id;

            const movieElement = document.createElement('div');
            movieElement.className = 'movie';

            const plotValue = document.createElement('p');
            plotValue.className = 'plot-value';
            plotValue.textContent = movie.plot;

            const castValue = document.createElement('p');
            castValue.className = 'cast-value';
            castValue.textContent = movie.cast;

            const runtimeValue = document.createElement('p');
            runtimeValue.className = 'runtime-value';
            runtimeValue.textContent = movie.runtime;

            const ratingValue = document.createElement('p');
            rating