import './HowToPlayParkour.css';
import Image1 from '../../../public/images/Rectangle9.png';
import Image2 from '../../../public/images/Rectangle10.png';
import Image3 from '../../../public/images/Rectangle11.png';

export const HowToPlayParkour = () => {
  return (
    <div className="howto-wrapper">
    <h2>How to Play Parkour</h2>
    <div className="images-wrapper">
      <div className="image-container tall-image">
        <img src={Image1} alt="Parkour image" />
        <p>Play with friends</p>
      </div>
      <div className="image-container">
        <img src={Image2} alt="Parkour players image" />
        <p>Play with your children</p>
      </div>
      <div className="image-container">
        <img src={Image3} alt="Parkour coach image" />
        <p>Play with class coach</p>
      </div>
    </div>
   </div> 
  );
};
