import { useTranslation } from "react-i18next";
import arrowdown from "../../assets/arrowdown.svg";
import imageDoor from "../../assets/image-door.svg";
import "./introsection.css";

export const IntroSection = () => {
  const { t } = useTranslation();

  //Function that scrolls to the next section
  const handleClick = () => {
    const element = document.getElementById("class-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <button className="lets-go" onClick={handleClick}>
        {t("letsGoBtn")}
        <img src={arrowdown} alt="arrow-pointing-down" />
      </button>

      <img alt="wave pattern" className="intro-wave" />
    </div>
  );
};
