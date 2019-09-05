const express = require('express');
const router = express.Router();
const movieService = require('./movie.service');

// routes
router.get('/', getAll);
router.get('/current', getCurrent);
router.put('/current/:id', updateCurrentFav);

module.exports = router;

function getAll(req, res, next) {
    movieService.getAll()
        .then(movies => {
            res.json(movies)
        })
        .catch(err => {
            next(err)
        });
}

function updateCurrentFav(req, res, next) {
    movieService.updateCurrentFav(req.params.id, req.body)
        .then(() => {

        })
        .catch(err => {
            next(err)
        });
}

function getCurrent(req, res, next) {
    movieService.getById(req.movie.sub)
        .then(movie => movie ? res.json(movie) : res.sendStatus(404))
        .catch(err => next(err));
}
