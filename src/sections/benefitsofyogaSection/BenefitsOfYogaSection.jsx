import "./benefitsofyogasection.css";
import { useTranslation } from "react-i18next";
import wave3mini from "../../assets/wave-3mini.svg";

export const BenefitsOfYogaSection = () => {
  const { t } = useTranslation();
  const benefitList = t("benefitsOfYogaArray", { returnObjects: true });

  return (
    <div className="benefits-container">
      <h2 className="benefits-title">{t("benefitsOfYogaTitle")}</h2>
      <p>{t("benefitsOfYogaInfo")}</p>
      <ul className="benefitList">
        {benefitList.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>

      <button className="learnMoreBtn">{t("learnMoreAboutYogaBtn")}</button>
      <img src={wave3mini} alt="wave pattern" className="benefits-wave" />
    </div>
  );
};
