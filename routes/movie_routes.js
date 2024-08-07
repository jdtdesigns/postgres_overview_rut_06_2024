const router = require('express').Router();

const movie_controller = require('../controllers/movie_controller');

// Create a movie in the database
router.post('/movies', movie_controller.createMovie);

// Edit a movie

// Delete a movie

module.exports = router;