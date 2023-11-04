import "./yogatypesection.css";
import { useTranslation } from "react-i18next";
import imagesun from "../../assets/imagesun.svg";
import wave3mini from "../../assets/wave-3mini.svg";
import wave3tablet from "../../assets/wave-3tablet.svg";
import { PrimaryBtn } from "../../components/buttons/primary/PrimaryBtn";
import { SecondaryBtn } from "../../components/buttons/secondary/SecondaryBtn";

export const YogaTypeSection = () => {
  const { t } = useTranslation();
  return (
    <div className="yoga-type-container">
      <h2 className="yoga-type-title">{t("yogaTypeTitle")}</h2>
      <div className="yoga-type-info">
        <p>{t("yogaTypeSubtitle")}</p>
        <p>{t("yogaTypeInfo")}</p>
      </div>
      <div className="yogaTypeBtns">
        <PrimaryBtn btnName={t("yogaTypeBtn")} />
        <SecondaryBtn btnName={t("bookClassBtn")} />
      </div>
      <img src={imagesun} alt="image of meditation" className="image-sun" />
      <img src={wave3mini} alt="wave-pattern" className="yoga-type-wave-mini" />
      <img
        src={wave3tablet}
        alt="wave-pattern"
        className="yoga-type-wave-tablet"
      />
    </div>
  );
};
