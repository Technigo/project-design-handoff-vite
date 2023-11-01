import "./Member.css";
import BigBlue from "../../assets/images/bigblue.png";
import { Buttons } from "../../components/Buttons/Buttons";
import button from "../../assets/Button.svg";
import buttonHover from "../../assets/ButtonHover.svg";

export const Member = () => {
  return (
    <div className="member-container-main">
      <div className="member-content">
        <h1>A fitnessstudio that fits the whole family</h1>
        <p>
          With us, you as a parent get time to take care of yourself and your
          body, while your child can play in a safe environment
        </p>
        <Buttons
          buttonText=""
          url="https://example.com"
          icon={button}
          //   icon="/src/assets/Button.svg"
          hoverIcon={buttonHover}
          alt="Button Icon"
        />
      </div>
      <img src={BigBlue} className="member-image" />
    </div>
  );
};
