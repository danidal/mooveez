const db = require('_helpers/db');
const Movie = db.Movie;
const mongoose = require('mongoose');
const Types = mongoose.Types;

module.exports = {
    getAll,
    updateCurrentFav
};

async function getAll() {
    const movies = await Movie.find({year: {$gte: 1990}, type: 'movie', poster:{$ne:null}}).limit(500);
    return movies;
}

async function updateCurrentFav(id, {isFav}) {
    await Movie.updateOne(
        { _id: Types.ObjectId(id) },
        {
            $set: { favourite: isFav }
        }
    );
}