
const express = require('express');
const router = express.Router();
const { getUsers, createUser, loginUser } = require('../controllers/userController');

// route to retrieve users' full name and email
router.get('/api/users', getUsers);

// route to create a new user
router.post('/api/register', createUser);

// route to handle user login
router.post('/api/login', loginUser);

module.exports = router;