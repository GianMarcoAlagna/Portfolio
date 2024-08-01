import React from 'react';
import './Preloader.css';

export const Preloader = ({ children, loading }) => (
  loading ? (
    <div className="preloader">
      <div className="spinner"></div>
    </div>
  ) : (
    <>{children}</>
  )
);
