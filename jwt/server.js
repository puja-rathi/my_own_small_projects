const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8000;

// Secret key for JWT
const SECRET_KEY = 'my_secret_key';

// Middleware to parse the body of a request
app.use(bodyParser.json());

// Sample users
const users = [
    { username: 'user1', password: 'password1', isAdmin: false },
    { username: 'admin', password: 'adminpassword', isAdmin: true }
];

// User login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find user
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        // Generate JWT
        const token = jwt.sign({ username: user.username, isAdmin: user.isAdmin }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

// Middleware to verify JWT
const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, SECRET_KEY, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

// Protected route /resource
app.get('/resource', authenticateJWT, (req, res) => {
    res.send(`Hello, ${req.user.username}`);
});

// Protected route /admin_resource
app.get('/admin_resource', authenticateJWT, (req, res) => {
    if (req.user.isAdmin) {
        res.send('Hello, admin');
    } else {
        res.status(403).send('Access denied');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
