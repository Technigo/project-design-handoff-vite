import "./aboutus.css";
import wave3 from "../../assets/wave-3.svg";
import { useTranslation } from "react-i18next";

export const AboutUsSection = () => {
  const { t } = useTranslation();
  return (
    <div className="about-us-container">
      <h2 className="about-us-tite">{t("aboutUsTitle")}</h2>
      <p className="about-us-info">{t("aboutUsInfo")}</p>
      <button className="contactBtn">{t("contactBtn")}</button>
      <img src={wave3} alt="wave pattern" className="about-us-wave" />
    </div>
  );
};
