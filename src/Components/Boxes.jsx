import React from 'react';
import Logo from '../assets/Images/Logotype.png';
import './Boxes.css';

const Boxes = () => {
    return (
      <div>
        <section className="boxes">
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