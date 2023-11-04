import "./Signup.css";
import signUpSmal from "../../assets/Signup-smal.svg";

export const Signup = () => {
  return (
    <>
      <section className="signup-container">
        <h1 className="signup-text">
          Join us at Arn Yoga studio Reserve your next yoga class now
        </h1>
        <button className="signup-btn">
          <img src={signUpSmal} alt="A round sign up button" />
        </button>
      </section>
    </>
  );
};
