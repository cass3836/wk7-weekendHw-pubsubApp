const Movies = require('./models/movies.js');
const MoviesListView = require('./views/moviesListView.js');

document.addEventListener('DOMContentLoaded',() => {
  console.log('loaded');

  const movies = new Movies();
  movies.getData();

  const allMovies = document.querySelector('#allMovies');
  const moviesListView = new MoviesListView(allMovies);
  moviesListView.bindEvents();
});
