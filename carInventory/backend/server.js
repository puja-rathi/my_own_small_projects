const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize express
const app = express();
// Set up port for server to listen on
const PORT = process.env.PORT || 8000;

// Allow app to accept JSON and URL encoded values
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Connect to the database
mongoose.connect('mongodb://localhost:27017/carInventory', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

// Import routes
const carRoutes = require('./controllers/carController');
app.use('/api/cars', carRoutes);

// Start up express server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});