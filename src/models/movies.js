const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Movies = function(){
  this.data = [];
};

Movies.prototype.getData = function () {
  const url = 'https://ghibliapi.herokuapp.com/films';
  const request = new RequestHelper(url);
  request.get()
    .then((data) => {
      this.data = data;
      PubSub.publish('Movies:movies-data-loaded', this.data);
      console.log('this.data:', this.data);
    });
};


module.exports = Movies;
