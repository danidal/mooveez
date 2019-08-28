const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    name: { type: String, required: true }
});

schema.set('toJSON');

module.exports = mongoose.model('User', schema);