import { Buttons } from "../../components/Buttons/Buttons";
import LastSectionPic from "../../assets/images/lastSectionPic.png";
import button from "../../assets/Button.svg";
import buttonHover from "../../assets/ButtonHover.svg";
import "./LastSection.css";

export const LastSection = () => {
  return (
    <>
      <div className="last-section-wrapper">
        <img src={LastSectionPic} alt="image" />
        <h2>We make families healthier and happier!</h2>
        <p>
          Welcome to the worlds most including fitness center! We are proud of
          our wide and varied training offer, so that you have access to what
          you need to feel mastery, progress and can take care of your physical
          and mental health. We give you all the tools you need to reach your
          goals, while your kids can play and develop.
        </p>

        <p>Everyone is welcome at FamilyFitness!</p>
        <Buttons
          buttonText=""
          url="https://example.com"
          icon={button}
          hoverIcon={buttonHover}
          alt="LogIn"
        />
      </div>
    </>
  );
};
