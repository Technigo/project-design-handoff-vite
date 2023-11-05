import "./classsection.css";
import { useTranslation } from "react-i18next";
import wave3mini from "../../assets/wave-3mini.svg";
import wave3tablet from "../../assets/wave-3tablet.svg";
import wave3desktop from "../../assets/wave-3desktop.svg";

import { PrimaryBtn } from "../../components/buttons/primary/PrimaryBtn";
import { SecondaryBtn } from "../../components/buttons/secondary/SecondaryBtn";
import { InvertedBtn } from "../../components/buttons/inverted/InvertedBtn";
import yogagrey from "../../assets/yogagrey.svg";

export const ClassSection = () => {
  const { t } = useTranslation();
  return (
    <div className="classection-container">
      {/* <div className="classsection-info"> */}
      <h2 className="classes-title">{t("classes")}</h2>
      <p className="class-info">{t("wideRange")}</p>
      <p className="class-info">{t("bookOrSign")}</p>
      {/* </div> */}

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
        <img alt="wave-pattern" className="upper-wave" />
        <img src={yogagrey} alt="yoga-pose-image" className="yoga-stretch" />
        <img alt="wave-pattern" className="lower-wave" />
        <div className="yoga-type-info-box">
          <h3>{t("yogaTypeTitle")}</h3>
          <p>{t("yogaTypeSubtitle")}</p>
          <p>{t("yogaTypeInfo")}</p>
          <div className="yogaTypeBtns">
            <PrimaryBtn btnName={t("yogaTypeBtn")} />
            <SecondaryBtn btnName={t("bookClassBtn")} />
          </div>
        </div>

        {/* <img alt="wave-pattern" className="lower-wave" /> */}
      </div>
    </div>
  );
};
