import "./aboutus.css";
import { useTranslation } from "react-i18next";
import wave3mini from "../../assets/wave-3mini.svg";
import wave3tablet from "../../assets/wave-3tablet.svg";
import { PrimaryBtn } from "../../components/buttons/primary/PrimaryBtn";

export const AboutUsSection = () => {
  const { t } = useTranslation();
  return (
    <div className="about-us-container">
      <div className="about-us-content-container">
        <h2 className="about-us-tite">{t("aboutUsTitle")}</h2>
        <p className="about-us-info">{t("aboutUsInfo")}</p>
        <div style={{ maxWidth: "80%", alignSelf: "center" }}>
          <PrimaryBtn btnName={t("contactBtn")} />
        </div>
      </div>
      <img src={wave3mini} alt="wave pattern" className="about-us-wave-mini" />
      <img
        src={wave3tablet}
        alt="wave pattern"
        className="about-us-wave-tablet"
      />
    </div>
  );
};
