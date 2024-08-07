const Movie = require('../models/Movie');

module.exports = {
  showHomePage(req, res) {
    res.render('homepage', {
      name: 'JD',
      message: 'This is really cool!'
    });
  },

  async showMoviesPage(req, res) {
    const movies = await Movie.findAll();

    res.render('movies', {
      movies: movies.map(movieObj => movieObj.get({ plain: true }))
    });
  },

  showAddFormPage(req, res) {
    res.render('movie_form');
  }
}
