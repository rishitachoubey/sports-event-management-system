import React from 'react';
import './ErrorDisplay.scss';

const ErrorDisplay = ({ message }) => {
  return <div className="error-display">{message || 'An error occurred!'}</div>;
};

export default ErrorDisplay;
