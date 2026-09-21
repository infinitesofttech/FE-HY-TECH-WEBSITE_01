import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide the preloader after 1.2 seconds of initial load
    const timer = setTimeout(() => {
      setLoading(false);
      // Wait 0.5s for the fade out transition before removing it from DOM completely
      setTimeout(() => setVisible(false), 500);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader ${loading ? 'is-loading' : 'fade-out'}`}>
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
          <img src="/images/logo-icon.png" alt="Loading" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
