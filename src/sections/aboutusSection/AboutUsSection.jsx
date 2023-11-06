import "./aboutus.css";
import { useTranslation } from "react-i18next";
import { PrimaryBtn } from "../../components/buttons/primary/PrimaryBtn";

export const AboutUsSection = () => {
  const { t } = useTranslation();
  return (
    <div className="about-us-container">
      <div className="about-us-content-container">
        <h2 className="about-us-tite">{t("aboutUsTitle")}</h2>
        <p className="about-us-info">{t("aboutUsInfo")}</p>
        <p className="about-us-info">{t("aboutUsExplore")}</p>
        <div style={{ maxWidth: "80%", alignSelf: "center" }}>
          <PrimaryBtn btnName={t("contactBtn")} />
        </div>
      </div>
      <img alt="wave pattern" className="about-us-wave" />
    </div>
  );
};
