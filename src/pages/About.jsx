
import "./about.css"
import { AboutContainer } from "../components/About/AboutContainer";
import { H1_Headline } from "../components/Typography/H1_Headline";
import { PText } from "../components/Typography/PText";
import { FreeTrialBtn } from "../components/Buttons/FreeTrialBtn";
import { useTranslation } from "react-i18next";

export const About = () => {

  const { t } = useTranslation();
  let h1_headline = t("about.h1");
  let text = t("about.text");

  return (
    <div className="about-page-wrapper">
      <div className="about-content">
        <div className="about-hero-content">
          <div className="about-headline-wrapper">
            <H1_Headline h1_headline={h1_headline} />
          </div>
          <div className={`trial-about-wrapper`}>
            <div className="trial-about-text">
              <PText
                className="paragraph-text"
                text={text}
              />
            </div>
            <FreeTrialBtn />
          </div>
        </div>
        <AboutContainer />
      </div>
    </div>
  )
}
