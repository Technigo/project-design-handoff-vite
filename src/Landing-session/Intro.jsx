import "/src/Landing-session/intro.css";
import { BtnLight } from "../components/BtnLight";

export const Intro = () => {
  return (
    <div className="intro-wrapper">
      <div className="intro-img"></div>
      <h1>Yoga, Not just for the calm and quiet kids</h1>
      <p>
        Yoga is for all kids that like to play. Sounds fun? Join us on a joyful
        adventure to self-discovery!
      </p>
      <BtnLight name=" try for free!" />
      <img
        src="/public/assets/icon/arrow_up_128.svg"
        alt="Arrow"
        className="arrow-up"
      />
    </div>
  );
};
