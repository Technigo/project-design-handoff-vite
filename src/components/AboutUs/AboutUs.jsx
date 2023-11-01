import './AboutUs.css';
import ImageAboutUs from '../../../public/images/image19.png';
import { Link } from 'react-router-dom';

export const AboutUs = () => {
  return (
    <div className="aboutUsContainer">
            <div className="leftColumn">
                <h1>About us</h1>
                <p>It started with grandma and Nestor, 9 years old, being bored on their way home from school. Then came AuntieParkour, and today Play Parkour offers parkour Programs and classes for all ages.</p>
                <Link to="/about">
                <button className="yellowButton">About Play Parkour</button>
                </Link>
            </div>
            <div className="rightColumn">
                <img src={ImageAboutUs} alt="About Us" className="roundImage" />
            </div>
        </div>
  )
}
