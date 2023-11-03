import { useTranslation } from "react-i18next";
import wave7mini from "../../assets/wave-7mini.svg";
import wave7tablet from "../../assets/wave-7tablet.svg";

import wave4 from "../../assets/wave-4mini.svg";
import arrowdown from "../../assets/arrowdown.svg";
import imageDoor from "../../assets/image-door.svg";
import "./introsection.css";

export const IntroSection = () => {
  const { t } = useTranslation();
  const windowWidth = window.innerWidth;
  console.log(windowWidth);

  return (
    <div className="intro-container">
      <h2 className="dive-in">{t("intro")}</h2>
      <div className="title-and-image">
        <h1 className="yoga-title">{t("introYoga")}</h1>
        <img src={imageDoor} alt="Image of woman in yoga pose" />
      </div>

      <div className="yoga-for-everyone">
        <h3 className="yoga-subtitle">
          {t("introSub")}
          {/* {t("introSub1")}{" "}
          <div style={{ fontWeight: "bold" }} className="derp">
            {t("introSub2")}
          </div> */}
        </h3>
      </div>
      <button className="lets-go">
        {t("letsGoBtn")}
        <img src={arrowdown} alt="arrow-pointing-down" />
      </button>

      <img src={wave7mini} alt="wave pattern" className="intro-wave-mini" />

      <img src={wave7tablet} alt="wave pattern" className="intro-wave-tablet" />
    </div>
  );
};
