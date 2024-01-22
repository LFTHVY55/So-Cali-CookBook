const express = require('express');
const router = express.Router();

// Import the SQL helper functions from your db directory
const { getUser, createUser, updateUser, deleteUser } = require('../db/user');

// Define routes for the User section here
router.get('/', (req, res) => {
  // Handle GET request for all users
  const users = getUser();
  res.json(users);
});

router.get('/:id', (req, res) => {
  // Handle GET request for a specific user by ID
  const { id } = req.params;
  const user = getUser(id);
  res.json(user);
});

router.post('/', (req, res) => {
  // Handle POST request to create a new user
  const { username, email, password } = req.body;
  const newUser = createUser(username, email, password);
  res.json(newUser);
});

// Define routes for updating and deleting users in a similar manner

module.exports = router;
