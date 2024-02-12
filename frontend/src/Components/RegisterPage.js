import React, { useState } from 'react';
import '../styles/RegisterPage.css';
import NavigationButton from './NavigateButton';
import SuccessPopup from './SuccessPopup';

const RegisterPage = () => {
  // state variables to store form data
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    let errors = [];

    // Creating a new user object
    const newUser = { full_name: fullName, email: email, phone_number: phoneNumber, password: password };
    
    try {
        // POST request to create a new user
        const response = await fetch('http://localhost:4000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        });
  
        // handle success response
        if (response.ok) {
            setShowSuccessPopup(true);
            setFullName(''); // Clearing input fields
            setEmail('');
            setPhoneNumber('');
            setPassword('');
            setError(null); // Clearing any existing errors
        } else {
            const errorResponse = await response.json();
            if (Array.isArray(errorResponse.errors)) {
                // Concatenating all error messages
                errors = errorResponse.errors.map(error => error.message);
              } else {
                // If it's a single error, adding it to the errors array
                errors.push(errorResponse.error);
              }
            setError(errors); // Setting error state with error message from backend
            console.error('Failed to create user:', response.statusText);
        }
      } catch (error) {
        console.error('Error creating user:', error);
        setError('An error occurred while creating user');
      }
    };

    const handleClosePopup = () => {
        setShowSuccessPopup(false);
      };

  return (
    <div className="centered-container">
      <h2 className="headline">Register </h2>
      {showSuccessPopup && <SuccessPopup message="User created successfully" onClose={handleClosePopup} />}
      {Array.isArray(error) && error.map((errorMessage, index) => (
        <p key={index} className="error-message">{errorMessage}</p>
      ))}
      <form onSubmit={handleSubmit} className="input-container">
        <div className="input-field">
          <label htmlFor="fullName">Full Name:</label>
          <input 
            type="text" 
            id="fullName" 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)} 
            required 
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="input-field">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input 
            type="text" 
            id="phoneNumber" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            required 
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button className="submit-button" type="submit">Save</button>
      </form>
      <div style={{ marginTop: '20px' }}>
        <NavigationButton targetRoute="/users" buttonText="Go to user's list" />
      </div>
    </div>
  );
};

export default RegisterPage;