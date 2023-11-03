import "./benefitsofyogasection.css";
import { useTranslation } from "react-i18next";
import wave3mini from "../../assets/wave-3mini.svg";
import wave3tablet from "../../assets/wave-3tablet.svg";
import { PrimaryBtn } from "../../components/buttons/primary/PrimaryBtn";

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
      <div style={{ maxWidth: "70%", alignSelf: "center" }}>
        <PrimaryBtn btnName={t("learnMoreAboutYogaBtn")} />
      </div>
      <img src={wave3mini} alt="wave pattern" className="benefits-wave-mini" />
      <img
        src={wave3tablet}
        alt="wave pattern"
        className="benefits-wave-tablet"
      />
    </div>
  );
};
