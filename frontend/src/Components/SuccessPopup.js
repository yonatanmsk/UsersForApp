import React from 'react';
import '../styles/SuccessPopup.css';

const SuccessPopup = ({ message, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SuccessPopup;