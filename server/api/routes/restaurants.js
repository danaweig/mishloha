const express = require('express');
const router = express.Router();
const RestaurantModel = require('../models/restaurant');
const mongoose = require('mongoose');

router.get("/", async (req, res) => {
    try {
        const restaurants = await RestaurantModel.find();
        res.send(restaurants);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.get('/:id', async (req, res) => {

    try {
        const restaurant = await RestaurantModel.findById(req.params.id);
        res.send(restaurant);
    } catch (err) {
        res.status(404).json({ error: `restaurant was not found` });
    }

});
router.put('/:id', async (req, res) => {
    try {
        const restaurant = await RestaurantModel.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.send(restaurant);
    } catch (err) {
        res.status(500).json({ error: err });
    }

});

router.post("/", async (req, res) => {

    const restaurant = new RestaurantModel(req.body);
    try {
        const result = await restaurant.save();
        res.status(200).json({ message: `restaurant posted` });

    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await RestaurantModel.findByIdAndDelete(req.body.id);
        res.status(200).json({ message: `restaurant deleted` });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});



module.exports = router;