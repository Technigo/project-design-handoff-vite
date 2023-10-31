import { AboutContainer } from "../components/About/AboutContainer";
import { H1_Headline } from "../components/Typography/H1_Headline";
import { PText } from "../components/Typography/PText";

export const About = () => {
  let h1_headline = "Discover Strength, Balance, and Inner Harmony Anywhere, Anytime";
  let text = "Start a Free trial ▾";


  return (
    <div className="about-page-wrapper">
      <H1_Headline h1_headline={h1_headline} />
      <PText text={text} />
      <section className="about-card-page-wrapper">
        <AboutContainer />
      </section>
    </div>
  )
}
