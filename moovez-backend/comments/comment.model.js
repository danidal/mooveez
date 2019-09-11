const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Types = mongoose.Types;

const commentSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    movie_id: { type: Types.ObjectId, required: true },
    text: { type: String, required: true },
    date: { type: Date, required: true }
});

commentSchema.set('toJSON');

module.exports = mongoose.model('Comment', commentSchema);