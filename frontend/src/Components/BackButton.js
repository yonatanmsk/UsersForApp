import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NavigateButton.css';

const BackButton = () => {
  // navigate function using the useNavigate hook
  const navigate = useNavigate();

  // function to navigate back to the main page
  const goBack = () => {
    navigate('/');
  };

  return (
    <button onClick={goBack} className="navigation-button">Back</button>
  );
};

export default BackButton;