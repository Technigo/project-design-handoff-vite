import { useTranslation } from "react-i18next";
import wave7 from "../../assets/wave-7.svg";
import arrowdown from "../../assets/arrowdown.svg";
import imageDoor from "../../assets/image-door.svg";
import "./introsection.css";

export const IntroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="intro-container">
      <h2>{t("intro")}</h2>
      <div className="title-and-image">
        <h1 className="yoga-title">{t("introYoga")}</h1>
        <img src={imageDoor} alt="Image of woman in yoga pose" />
      </div>
      <div className="yoga-for-everyone">
        <p>{t("introSub")}</p>
      </div>
      <button className="lets-go">
        {t("letsGoBtn")}
        <img src={arrowdown} alt="arrow-pointing-down" />
      </button>

      <img src={wave7} alt="wave pattern" className="wave7" />
    </div>
  );
};
