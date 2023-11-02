import yogaImage from "../../assets/Arn Yoga image 3.png";
import signUpSmal from "../../assets/Signup-smal.svg";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-title">
        Harmony in Every Breath, Peace in Every Pose
      </h1>
      <div className="image-container">
        <img
          src={yogaImage}
          alt="A woman doing yoga in the sunset"
          className="yoga-image"
        />
        <button className="signup-smal-button">
          <img src={signUpSmal} alt="A round sign up button" />
        </button>
      </div>
    </div>
  );
};
