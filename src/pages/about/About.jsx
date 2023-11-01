import "./about.css";
import { AboutMainSection } from "../../sections/aboutMainSection/aboutMainSection";
import { GoodToKnowSection } from "../../sections/goodtoknowSection/GoodToKnowSection";
import { ContactUsSection } from "../../sections/contactusSection/ContactUsSection";

export const About = () => {
  return (
    <div className="about-container">
      <section className="about-main-section">
        <AboutMainSection />
      </section>
      <section className="good-to-know-section">
        <GoodToKnowSection />
      </section>
      <section className="contact-us-section">
        <ContactUsSection />
      </section>
    </div>
  );
};
