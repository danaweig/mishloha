const express = require('express');
const router = express.Router();
const CategoryModel = require('../models/category');
const mongoose = require('mongoose');

router.get("/", async (req, res) => {
    try {
        const categories = await CategoryModel.find();
        res.send(categories);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.get('/:id', async (req, res) => {

    try {
        const category = await CategoryModel.findById(req.params.id);
        res.send(category);
    } catch (err) {
        res.status(404).json({ error: `category was not found` });
    }

});
router.put('/:id', async (req, res) => {
    try {
        const category = await CategoryModel.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.send(category);
    } catch (err) {
        res.status(500).json({ error: err });
    }

});

router.post("/", async (req, res) => {

    const category = new CategoryModel(req.body);
    try {
        const result = await category.save();
        res.status(200).json({ message: `category posted` });

    } catch (err) {
        res.status(500).json({ error: err });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await CategoryModel.findByIdAndDelete(req.body.id);
        res.status(200).json({ message: `category deleted` });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});



module.exports = router;