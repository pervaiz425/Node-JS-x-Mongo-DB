// routes/users.js
const express = require('express');
const router = express.Router();

// Define a route for the '/users' URL
router.get('/', (req, res) => {
  res.send('List of users');
});

// Define a route for the '/users/:id' URL
router.get('/:id', (req, res) => {
  res.send(`User with ID ${req.params.id}`);
});

// Export the router to be used in other files
module.exports = router;
