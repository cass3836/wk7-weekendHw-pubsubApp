const MovieView = require('./movieView.js');
const PubSub = require('../helpers/pub_sub.js');
const Movie = require('../models/movies.js');

const MoviesListView = function(element){
  this.element = element;
  this.data = null;
}

MoviesListView.prototype.bindEvents = function (){
  PubSub.subscribe('Movies:movies-data-loaded', (event) => {
    console.log('event.detail:', event.detail);
    this.data = event.detail;
    this.render();
    this.populateDropdown(this.data);
  })
}

MoviesListView.prototype.populateDropdown = function(allData){
  options = allData.map(movie => movie.director)
    .filter((director, index, allData) => allData.indexOf(director) === index);
  // console.log(options);
  options.forEach((director, index) => {
    const directorsDropdown = document.querySelector('#directorsDropdown');
    const option = document.createElement('option');
    option.textContent = director;
    option.value = director;
    directorsDropdown.appendChild(option);
  });
};

MoviesListView.prototype.render = function (){
  console.log('this.data:', this.data);
  this.data.forEach((movie) => {
    const movieView = new MovieView(movie);
    movieView.render();
  });
}

module.exports = MoviesListView;
