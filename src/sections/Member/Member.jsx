import "./Member.css";
import BigBlue from "../../assets/images/bigblue.png";
import { Buttons } from "../../components/Buttons/Buttons";
import button from "../../assets/Button.svg";
import buttonHover from "../../assets/ButtonHover.svg";
import { useTranslation } from "react-i18next";

export const Member = () => {
  const { t } = useTranslation();

  return (
    <div className="member-container-main">
      <div className="member-content">
        <h1>{t("Member.heading")}</h1>
        <p>{t("Member.text")}</p>
        <div className="member-button">
          <Buttons
            buttonText=""
            url="https://example.com"
            icon={button}
            hoverIcon={buttonHover}
            alt="Button Icon"
            className="custom-button"
          />
        </div>
      </div>
      <img src={BigBlue} className="member-image" />
    </div>
  );
};
