import "./yogatypesection.css";
import { useTranslation } from "react-i18next";
import imagesun from "../../assets/imagesun.svg";
import wave3 from "../../assets/wave-3.svg";
export const YogaTypeSection = () => {
  const { t } = useTranslation();
  return (
    <div className="yoga-type-container">
      <h2 className="yoga-type-title">{t("yogaTypeTitle")}</h2>
      <p>{t("yogaTypeSubtitle")}</p>
      <p>{t("yogaTypeInfo")}</p>
      <div className="typeBtns">
        <button className="findYogaTypeBtn">{t("yogaTypeBtn")}</button>
        <button className="bookClassBtn">{t("bookClassBtn")}</button>
      </div>
      <img src={imagesun} alt="image of meditation" className="image-sun" />
      <img src={wave3} alt="wave-pattern" className="yoga-type-wave" />
    </div>
  );
};
