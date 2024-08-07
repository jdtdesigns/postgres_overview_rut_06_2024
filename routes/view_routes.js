const router = require('express').Router();

const view_controller = require('../controllers/view_controller');

// localhost:3333
router.get('/', view_controller.showHomePage);

// localhost:3333/movies
router.get('/movies', view_controller.showMoviesPage);

// localhost:3333/movies
router.get('/add', view_controller.showAddFormPage);

module.exports = router;