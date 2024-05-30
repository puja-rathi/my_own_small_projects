const express = require('express');
const Car = require('../models/Car'); 
const router = express.Router();

// Create a new car
router.post('/', async (req, res) => {
    const { make, model, registrationNumber, owner, year } = req.body;
    const car = new Car({ make, model, registrationNumber, owner, year });
    try {
        await car.save();
        res.status(201).send(car);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all cars
router.get('/', async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).send(cars);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a single car by ID
router.put('/:id', async (req, res) => {
    try {
        const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!car) {
            return res.status(404).send();
        }
        res.status(200).send(car);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Update multiple cars
router.put('/', async (req, res) => {
    const updates = req.body; // Array of objects with id and update fields
    const updatePromises = updates.map(update =>
        Car.findByIdAndUpdate(update.id, update.fields, { new: true })
    );
    try {
        const results = await Promise.all(updatePromises);
        res.status(200).send(results);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a car by ID
router.delete('/:id', async (req, res) => {
    try {
        const car = await Car.findByIdAndDelete(req.params.id);
        if (!car) {
            return res.status(404).send();
        }
        res.status(200).send(car);
    } catch (error) {
        res.status(500).send(error);
    }
});

// List cars older than 5 years
router.get('/older-than-5-years', async (req, res) => {
    const currentYear = new Date().getFullYear();
    try {
        const cars = await Car.find({ year: { $lt: currentYear - 5 } });
        res.status(200).send(cars);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;