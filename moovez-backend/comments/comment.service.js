const db = require('_helpers/db');
const Comment = db.Comment;
const mongoose = require('mongoose');
const Types = mongoose.Types;

module.exports = {
    getByMovieId,
    create
};

async function getByMovieId(movieId) {
    const comments = await Comment.find({movie_id: Types.ObjectId(movieId)});
    return comments;
}

async function create(commentParam) {
    const comment = new Comment(commentParam);

    // save user
    await comment.save();
}