const express = require('express');
const router = express.Router();
const commentService = require('./comment.service');

// routes
router.get('/:movieId', getByMovieId);
router.put('/', addComment);

module.exports = router;

function getByMovieId(req, res, next) {
    commentService.getByMovieId(req.params.movieId)
        .then(comments => {
            res.json(comments)
        })
        .catch(err => {
            next(err)
        });
}

function addComment(req, res, next) {
    commentService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}