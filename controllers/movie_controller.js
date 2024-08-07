const Movie = require('../models/Movie');

module.exports = {
  async createMovie(req, res) {
    await Movie.create(req.body);

    res.redirect('/movies');
  }
}
