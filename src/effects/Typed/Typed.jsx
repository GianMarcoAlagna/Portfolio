import React from 'react';
import './Typed.css'; // Import the CSS file for styling

const Typed = ({ children }) => {
  return (
    <div className="text-container">
      <div className="text-container__content text-outline">
        {children}
      </div>
      <div className="text-container__content text-fill">
        {children}
      </div>
    </div>
  );
};

export default Typed;
