const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    title: String,
    desc: String,
});

module.exports = model('Category', categorySchema);