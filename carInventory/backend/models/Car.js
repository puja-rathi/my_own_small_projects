//require mongoose
const mongoose = require('mongoose');

//create carSchema using mongoose.Schema
const carSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    registrationNumber: {
        type: String,
        required: true,
        unique: true
    },
    owner: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
});

//create Car model
const Car = mongoose.model('Car', carSchema);

module.exports = Car;