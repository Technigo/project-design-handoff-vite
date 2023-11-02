import { useTranslation } from "react-i18next";
import "./aboutmain.css";
import wave3 from "../../assets/wave-3.svg";
import imagesun from "../../assets/imagesun.svg";

export const AboutMainSection = () => {
  const { t } = useTranslation();
  return (
    <div className="about-main-container">
      <h1 className="about-main-title">{t("aboutPageTitle")}</h1>
      <img src={wave3} alt="wave pattern" />
      <p className="about-us-info">{t("aboutPageSubInfo")}</p>
      <img src={imagesun} alt="yoga medidation" />
      <img src={wave3} alt="wave pattern" />
    </div>
  );
};
