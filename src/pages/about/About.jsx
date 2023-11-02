import "./about.css";
import { AboutMainSection } from "../../sections/aboutMainSection/aboutMainSection";
import { GoodToKnowSection } from "../../sections/goodtoknowSection/GoodToKnowSection";
import { ContactUsSection } from "../../sections/contactusSection/ContactUsSection";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";

export const About = () => {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
};
