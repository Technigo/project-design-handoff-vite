import "./aboutus.css";
import wave3mini from "../../assets/wave-3mini.svg";
import { useTranslation } from "react-i18next";

export const AboutUsSection = () => {
  const { t } = useTranslation();
  return (
    <div className="about-us-container">
      <div className="about-us-content-container">
        <h2 className="about-us-tite">{t("aboutUsTitle")}</h2>
        <p className="about-us-info">{t("aboutUsInfo")}</p>
        <button className="contactBtn">{t("contactBtn")}</button>
      </div>
      <img src={wave3mini} alt="wave pattern" className="about-us-wave" />
    </div>
  );
};
