import { useTranslation } from "react-i18next";
import "./goodtoknow.css";
import wave3 from "../../assets/wave-3.svg";

export const GoodToKnowSection = () => {
  const { t } = useTranslation();
  return (
    <div className="good-to-know-container">
      <h2 className="good-to-know-title">{t("goodToKnow")}</h2>
      <div className="goodToKnowInfo">
        <div className="openingHours">
          <h3 className="openingHoursTitle">{t("openingHours")}</h3>
          <p className="openingHoursInfo">{t("openingHoursInfo")}</p>
        </div>
        <div className="bookAClass">
          <h3 className="bookAClassTitle">{t("bookAClass")}</h3>
          <p className="bookAClassInfo">{t("bookAClassInfo")}</p>
        </div>
        <div className="studioMembership">
          <h3 className="studioMembershipTitle">{t("studioMembership")}</h3>
          <p className="studioMembershipInfo">{t("studioMembershipInfo")}</p>
        </div>
      </div>
      <div className="signUpInBtns">
        <button className="signUpAbout">{t("signUpBtn")}</button>
        <button className="signInAbout">{t("login")}</button>
      </div>
      <img src={wave3} alt="wave pattern" />
    </div>
  );
};
