const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: { type: String, required: true },
    plot: { type: String, required: true },
    poster: { type: String, required: true },
    genres: [String],
    fullplot: String,
    countries: [String],
    languages: [String],
    cast: [String],
    directors: [String],
    writers: [String],
    num_mflix_comments: Number,
    year: Number,
    awards: {
        wins: Number,
        nominations: Number,
        text: String
      },
    imdb: {
        rating: Number,
        votes: Number,
        id: Number
      }
});

movieSchema.set('toJSON');

module.exports = mongoose.model('Movie', movieSchema);