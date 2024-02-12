import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import '../styles/NavigateButton.css';

const LogoutButton = ({ onLogout }) => {
    const navigate = useNavigate();
    const { setAuthenticated } = useContext(AuthContext);
    
    const handleLogout = () => {
    sessionStorage.removeItem('authToken'); // removing authentication token from session storage

    // reset application state (set authenticated status to false)
    setAuthenticated(false);
    
    // redirect the user to the login page
    navigate('/login');
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <button onClick={handleLogout} className="navigation-button">Logout</button>
  );
};

export default LogoutButton;