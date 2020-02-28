const { Schema, model, SchemaTypes } = require('mongoose');

const dishSchema = new Schema({
    title: String,
    desc: String,
    price: Number,
    image: String,
    tag: [Number],
    liked: Boolean,
    cartQuantity: Number,
    itemCategory: {
        type: SchemaTypes.ObjectId,
        ref: 'Category'
    },
    likeCount: Number,
    comments: String,
    dishOwner: String,
});

module.exports = model('Dish', dishSchema);