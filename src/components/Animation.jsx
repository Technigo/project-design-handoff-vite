import React, { useState, useEffect } from 'react';
import animation1 from '../assets/animation1.svg';
import animation2 from '../assets/animation2.svg';
import animation3 from '../assets/animation3.svg';

const images = [animation1, animation2, animation3];

const Animation = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const containerStyle = {
    width: '380px',
    height: '134px',
    borderRadius: '20px',
    background: '#FDF8F5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    flexShrink: 0,
    border: '1px solid #e6e6e6',
    padding: '16px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '16px 0', 
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    maxWidth: 'calc(100% - 32px)', 
    maxHeight: 'calc(100% - 32px)', 
    objectFit: 'contain', 
  };

  return (
    <div style={containerStyle}>
      <img
        src={images[currentImageIndex]}
        alt={`animation frame ${currentImageIndex + 1}`}
        style={imageStyle}
      />
    </div>
  );
};

export default Animation;
