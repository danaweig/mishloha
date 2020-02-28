const { Schema, model, SchemaTypes } = require('mongoose');

const restaurantSchema = new Schema({
    name: String,
    description: String,
    address: String,
    phone: String,
    deliveryTime: String,
    deliveryPrice: String,
    deliveryMinimum: String,
    takeawayTime: String,
    logo: String,
    heroImage: String
});

module.exports = model('Restaurant', restaurantSchema);