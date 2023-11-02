import "./about.css"
import { AboutContainer } from "../components/About/AboutContainer";
import { H1_Headline } from "../components/Typography/H1_Headline";
import { PText } from "../components/Typography/PText";
import { FreeTrialBtn } from "../components/Buttons/FreeTrialBtn";

export const About = () => {
  let h1_headline = "Discover Strength, Balance, and Inner Harmony Anywhere, Anytime";
  let text = "Start a Free trial ▾";


  return (
    <div className="about-page-wrapper">
      <div className="about-content">
        <div className="about-hero-content">
          <div className="about-headline-wrapper">
            <H1_Headline h1_headline={h1_headline} />
          </div>
          <div className="trial-about-wrapper">
            <div className="trial-about-text">
              <PText
                className="paragraph-text"
                text={text}
              />
            </div>
            <FreeTrialBtn />
          </div>
        </div>
        <section className="about-card-page-wrapper">
          <AboutContainer />
        </section>
      </div>
    </div>
  )
}
