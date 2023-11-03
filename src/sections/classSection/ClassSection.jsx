import "./classsection.css";
import { useTranslation } from "react-i18next";
import wave3mini from "../../assets/wave-3mini.svg";
import wave3tablet from "../../assets/wave-3tablet.svg";
import { PrimaryBtn } from "../../components/buttons/primary/PrimaryBtn";
import { SecondaryBtn } from "../../components/buttons/secondary/SecondaryBtn";
import { InvertedBtn } from "../../components/buttons/inverted/InvertedBtn";
import yogagrey from "../../assets/yogagrey.svg";

export const ClassSection = () => {
  const { t } = useTranslation();
  return (
    <div className="classection-container">
      <h2 className="classes-title">{t("classes")}</h2>
      <p className="class-info">{t("wideRange")}</p>
      <p className="class-info">{t("bookOrSign")}</p>

      <div className="classBtns">
        <PrimaryBtn btnName={t("bookClassBtn")} />
        <SecondaryBtn btnName={t("signUpBtn")} />
        {/* <button className="bookClassBtn">{t("bookClassBtn")}</button>
        <button className="signUpBtn">{t("signUpBtn")}</button> */}
      </div>

      <div className="member">
        <p>{t("alreadyMember")}</p>
        <div className="login" style={{ maxWidth: "50%", alignSelf: "center" }}>
          <InvertedBtn btnName={t("login")} />
        </div>
        {/* <button className="signInBtnTransparent">{t("login")}</button> */}
      </div>
      <div className="imgs">
        <img src={wave3mini} alt="wave-pattern" className="upper-wave-mini" />
        <img
          src={wave3tablet}
          alt="wave-pattern"
          className="upper-wave-tablet"
        />
        <img src={yogagrey} alt="yoga-pose-image" className="yoga-stretch" />
        <img src={wave3mini} alt="wave-pattern" className="lower-wave-mini" />
        <img
          src={wave3tablet}
          alt="wave-pattern"
          className="lower-wave-tablet"
        />
      </div>
    </div>
  );
};
