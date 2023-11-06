import { useTranslation } from "react-i18next";
import "./aboutmain.css";
import wave3mini from "../../assets/wave-3mini.svg";
import imagesun from "../../assets/imagesun.svg";

export const AboutMainSection = () => {
  const { t } = useTranslation();
  return (
    <div className="about-main-section">
      <h1 className="about-main-title">{t("aboutPageTitle")}</h1>
      <img src={wave3mini} alt="wave pattern" className="about-main-top-wave" />
      <p className="about-us-main-info">{t("aboutPageSubInfo")}</p>
      <img src={imagesun} alt="yoga medidation" className="image-sun-about" />
      <img alt="wave pattern" className="about-main-wave" />
    </div>
  );
};
