import { Link } from "react-router-dom";
import "./Welcome.css";
import angleImage from "../../assets/angle-right-solid.svg";

export const Welcome = () => {
  return (
    <div className="welcome-container">
      <h2 className="welcome-title">
        Find Serenity Within: Explore Arn Yoga Studio
      </h2>
      <h3 className="welcome-text">
        Arn Yoga Studio warmly welcomes those seeking self-care and peace,
        assisting them in rediscovering their inner tranquility. Our mission is
        to foster inner peace and mindfulness through a range of yoga practices,
        nature-based meditation, and themed retreats.
      </h3>
      <Link to="/about">
        <button className="about-btn">
          About us
          <img src={angleImage} alt="About us icon" className="btn-icon" />
        </button>
      </Link>
    </div>
  );
};
