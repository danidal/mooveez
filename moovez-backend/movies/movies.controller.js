const express = require('express');
const router = express.Router();
const movieService = require('./movie.service');

// routes
router.get('/', getAll);
router.get('/current', getCurrent);

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

function getCurrent(req, res, next) {
    movieService.getById(req.movie.sub)
        .then(movie => movie ? res.json(movie) : res.sendStatus(404))
        .catch(err => next(err));
}
