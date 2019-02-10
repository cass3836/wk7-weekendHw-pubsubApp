const MovieView = function(movie){
  // this.element = element;
  this.movie = movie;
};

MovieView.prototype.render = function(){
  console.log('this.movie:', this.movie);
  const element = document.querySelector('#movie');
  const movie = document.createElement('p');
  movie.textContent =
  `Movie title: ${this.movie.title}
  Description: ${this.movie.description}`;
  console.log('movie:', movie);
  console.log('element:', element);
  element.appendChild(movie);
};


module.exports = MovieView;
