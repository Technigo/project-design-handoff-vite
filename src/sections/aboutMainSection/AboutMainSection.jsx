import { useTranslation } from "react-i18next";
import "./aboutmain.css";
import wave3 from "../../assets/wave-3.svg";
import imagesun from "../../assets/imagesun.svg";

export const AboutMainSection = () => {
  const { t } = useTranslation();
  return (
    <div className="about-main-container">
      <h1></h1>
      <img src={wave3} alt="wave pattern" />{" "}
    </div>
  );
};
