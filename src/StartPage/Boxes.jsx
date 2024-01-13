import React from 'react';
import Image4 from '../assets/Images/Section 4.png';
import './Boxes.css';

const Boxes = () => {
    return (
      <div>
        <section className="boxes">
        <img src={Image4} alt="Image Section 4" />
        <div className="overlay">
          <div className="box">CLASSES</div>
          <div className="box">STUDIO</div>
          <div className="box">SCHEDULE</div>
        </div>
      </section>
    </div>
  );
};

export default Boxes;  