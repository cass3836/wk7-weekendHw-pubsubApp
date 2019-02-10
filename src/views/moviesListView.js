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
  })
}


MoviesListView.prototype.render = function (){
  console.log('this.data:', this.data);
  this.data.forEach((movie) => {
    const movieView = new MovieView(movie);
    console.log('movieView:', movieView);
    movieView.render();
    console.log('element:', this.element);
    this.element.appendChild(movieView);
  });
}

module.exports = MoviesListView;
