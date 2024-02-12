import React, { useState } from 'react';
import '../styles/LoginPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // axios for making HTTP requests

const LoginPage = ({ onLogin }) => { // Receive onLogin function as a prop
  // state variables to store user credentials
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  // function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        // sending a POST request to backend endpoint to authenticate the user
        const response = await axios.post('http://localhost:4000/api/login', {
          email: email.toLowerCase(),
          password,
        });

        // if the request is successful we set the user as logged in
        if (response.data.success) {
          onLogin(email, password);
          navigate('/users');
        } else {
          // if authentication fails we display an error message
          setError(response.data.message);
        }
      } catch (error) {
        console.error('Error logging in:', error);
        setError('An error occurred while logging in');
      }
  };

  return (
    <div className="centered-container">
      <h2 className="headline">Login</h2>
      <form onSubmit={handleSubmit} className="input-container">
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
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button className="submit-button" type="submit">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <p className="link">Don't have an account? <a href="/register">Register</a></p>
    </div>
  );
};

export default LoginPage;