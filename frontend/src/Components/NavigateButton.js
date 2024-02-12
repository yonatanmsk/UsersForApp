import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NavigateButton.css';

const NavigationButton = ({ targetRoute, buttonText }) => {
  // navigate function using the useNavigate hook
  const navigate = useNavigate();

  // function to navigate to the target route
  const goToTargetRoute = () => {
    navigate(targetRoute);
  };

  return (
    <button onClick={goToTargetRoute} className="navigation-button">{buttonText}</button>
  );
};

export default NavigationButton;