const express = require('express');
const router = express.Router();
const DishModel = require('../models/dish');
const mongoose = require('mongoose');

router.get("/", async (req, res) => {
    try {
        const dishes = await DishModel.find();
        res.send(dishes);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.get('/:id', async (req, res) => {

    try {
        const dish = await DishModel.findById(req.params.id).populate("category");
        res.send(dish);
    } catch (err) {
        res.status(404).json({ error: `Dish was not found` });
    }

});
router.put('/:id', async (req, res) => {
    try {
        const dish = await DishModel.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.send(dish);
    } catch (err) {
        res.status(500).json({ error: err });
    }

});

router.post("/", async (req, res) => {

    const dish = new DishModel(req.body);
    try {
        const result = await dish.save();
        res.status(200).json({ message: `Dish posted` });

    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await DishModel.findByIdAndDelete(req.body.id);
        res.status(200).json({ message: `Dish deleted` });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});



module.exports = router;