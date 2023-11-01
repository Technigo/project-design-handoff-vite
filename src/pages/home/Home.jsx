import { Navbar } from "../../components/navbar/Navbar";
import { IntroSection } from "../../sections/intro/IntroSection";
import { ClassSection } from "../../sections/classSection/ClassSection";
import "./home.css";
import { YogaTypeSection } from "../../sections/yogatypesection/YogaTypeSection";
import { BenefitsOfYogaSection } from "../../sections/benefitsofyogaSection/BenefitsOfYogaSection";
import { OurTeachersSection } from "../../sections/ourteachersSection/OurTeachersSection";
import { AboutUsSection } from "../../sections/aboutusSection/AboutUsSection";
import { Footer } from "../../components/footer/Footer";

export const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <section className="yoga-start-section">
        <IntroSection />
      </section>
      <section className="yoga-classes-section">
        <ClassSection />
      </section>
      <section className="yoga-types-section">
        <YogaTypeSection />
      </section>
      <section className="yoga-benefits-section">
        <BenefitsOfYogaSection />
      </section>
      <section className="yoga-teachers-section">
        <OurTeachersSection />
      </section>
      <section className="yoga-about-section">
        <AboutUsSection />
      </section>
      <Footer />
    </div>
  );
};
