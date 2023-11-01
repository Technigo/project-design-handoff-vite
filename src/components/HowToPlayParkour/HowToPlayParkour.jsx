import './HowToPlayParkour.css';
import Image1 from '../../../public/images/Rectangle9.png';
import Image2 from '../../../public/images/Rectangle10.png';
import Image3 from '../../../public/images/Rectangle11.png';
import { Link } from 'react-router-dom';

export const HowToPlayParkour = () => {
  return (
    <div className="howto-wrapper">
    <h1>How to Play Parkour</h1>
    <div className="images-wrapper">
    <Link to="/about">
      <div className="image-container tall-image">
        <img src={Image1} alt="Parkour image" />
        <p>Play with friends</p>
      </div>
      </Link>
      <Link to="/about">
      <div className="image-container">
        <img src={Image2} alt="Parkour players image" />
        <p>Play with your children</p>
      </div>
      </Link>
      <Link to="/about">
      <div className="image-container">
        <img src={Image3} alt="Parkour coach image" />
        <p>Play with class coach</p>
      </div>
      </Link>
    </div>
   </div> 
  );
};
