const db = require('_helpers/db');
const Movie = db.Movie;

module.exports = {
    getAll
};

async function getAll() {
    const movies = await Movie.find({year: {$gte: 1990}, type: 'movie', poster:{$ne:null}}).limit(500);
    return movies;
}
