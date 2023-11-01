import { Burger } from "../Burger/Burger";
import "./Header.css";
import logo from "../../assets/Logo-text.svg";
import yogaImage from "../../assets/Arn Yoga image 3.png";
import signUpSmal from "../../assets/Signup-smal.svg";

export const Header = () => {
  return (
    <>
      <header className="header-container">
        <img src={logo} alt="ARN yoga studio logo" className="logo-text" />
        {/* <Burger /> */}
        <h1 className="header-title">
          Harmony in Every Breath, Peace in Every Pose
        </h1>
        <img
          src={yogaImage}
          alt="A woman doing yoga in the sunset"
          className="yoga-image"
        />
        <img
          src={signUpSmal}
          alt="A round sign up button"
          className="signup-smal-button"
        />
      </header>
    </>
  );
};
