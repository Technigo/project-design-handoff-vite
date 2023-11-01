import "./classsection.css";
import { useTranslation } from "react-i18next";
import wave3 from "../../assets/wave-3.svg";

import yogagrey from "../../assets/yogagrey.svg";

export const ClassSection = () => {
  const { t } = useTranslation();
  return (
    <div className="classection-container">
      <h2>{t("classes")}</h2>
      <p>{t("classRange")}</p>

      <div className="yogaTypeBtns">
        <button className="bookClassBtn">{t("bookClassBtn")}</button>
        <button className="signUpBtn">{t("signUpBtn")}</button>
      </div>

      <div className="member">
        <p>{t("alreadyMember")}</p>
        <button className="signInBtnTransparent">{t("login")}</button>
      </div>
      <div className="imgs">
        <img src={wave3} alt="wave-pattern" className="upper-wave" />
        <img src={yogagrey} alt="yoga-pose-image" className="yoga-stretch" />
        <img src={wave3} alt="wave-pattern" className="lower-wave" />
      </div>
    </div>
  );
};
