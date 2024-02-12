const {  emailIsValid  } = require('../utils/validationUtilMail');
const {  passwordIsValid } = require('../utils/validationUtilPassword');
const {  phoneIsValid } = require('../utils/validationUtilPhoneNumber');

// array to store user data in memory
let users = [];

// function to retrieve users' full name and email
const getUsers = (req, res) => {
  try {
    // extracting full name and email from users array
    const userData = users.map(user => ({ full_name: user.full_name, email: user.email }));
    
    // sending response with retrieved user data
    res.json(userData);
  } catch (error) {
    // Handle errors
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'An error occurred while fetching users' });
  }
};

// Function to create a new user
const createUser = (req, res) => {
  try {
    // extracting user data from request body
    const { full_name, email, phone_number, password } = req.body;

    const errors = [];

    const existingEmail = users.find(user => user.email === email);
    if (existingEmail) {
      errors.push({ message: 'Email already exists' });
    }

    const existingPhoneNumber = users.find(user => user.phone_number === phone_number);
    if (existingPhoneNumber) {
      errors.push({ message: 'Phone number already exists' });
    }
    
    if (!emailIsValid(email)) {
        errors.push({ message: 'Invalid email address, the password should be in the following form: user@mail.com' });
      }
  
      if (!passwordIsValid(password)) {
        errors.push({ message: 'Invalid password, the password needs to contain at least one uppercase, one lowercase, one number, and one special character' });
      }
  
      if (!phoneIsValid(phone_number)) {
        errors.push({ message: 'Invalid phone number, the phone number should be in the following form: 05x-xxxxxxx' });
      }

    if (errors.length > 0) {
    return res.status(400).json({ errors });
    }
    // creating a new user object
    const newUser = { full_name, email, phone_number, password };
    
    // Adding the new user to the users array
    users.push(newUser);

    // sending response with the newly created user
    res.status(201).json(newUser);
  } catch (error) {
    // Handle errors
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'An error occurred while creating user' });
  }
};

const loginUser = (req, res) => {
    try {
      const { email, password } = req.body;
  
      // finding the user in the array of users based on the provided email
      const user = users.find(user => user.email.toLowerCase() === email.toLowerCase());
  
      // If the user is not found or the password doesn't match than returning an error
      if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // If the user is found and the password matches returning success
      res.json({ success: true, user });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'An error occurred while logging in' });
    }
  };

module.exports = { getUsers, createUser, loginUser };