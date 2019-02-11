const MovieView = function(movie){
  // this.element = element;
  this.movie = movie;
};

MovieView.prototype.render = function(){
  const element = document.querySelector('#movie');
  // const movie = document.createElement('p');

  const title = this.createTitle();
  const year = this.createYear();
  const director = this.createDirector();
  const description = this.createDescription();
  element.appendChild(title);
  element.appendChild(year);
  element.appendChild(director);
  element.appendChild(description);

};

MovieView.prototype.createTitle = function(){
  const title = document.createElement('h1');
  title.textContent = `${this.movie.title}`;
  return title;
};

MovieView.prototype.createYear = function(){
  const year = document.createElement('h2');
  year.textContent = `Year: ${this.movie.release_date}`;
  return year;
};
//
// MovieView.prototype.createDirector = function(){
//   const director = document.createElement('h2');
//   director.textContent = `Director: ${this.movie.director}`;
//   return director;
// };

MovieView.prototype.createDescription = function(){
  const description = document.createElement('p');
  description.textContent = `Description: ${this.movie.description}`;
  return description;
};

module.exports = MovieView;
