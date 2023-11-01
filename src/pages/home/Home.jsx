import { Navbar } from "../../components/navbar/Navbar";
import { IntroSection } from "../../sections/intro/IntroSection";
import { ClassSection } from "../../sections/classSection/ClassSection";
import "./home.css";

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
      <section className="yoga-types-section"></section>
      <section className="yoga-benefits-section"></section>
      <section className="yoga-teachers-section"></section>
      <section className="yoga-about-section"></section>
    </div>
  );
};
