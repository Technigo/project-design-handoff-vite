import { SectionTitle } from "../../../../components/reusable/SectionTitle";
import "./Section1.css";

export const Section1 = () => {
  return (
    <section id="section1">
      <div className="image-wrapper">
        <img src="./petra2.png" alt="" />
      </div>
      <div className="page-wrapper">
        <SectionTitle className="what-if-title" title="What if you could:" />
        <div className="section1-info">
          <p>
            I am Petra and the meaning of Petra is rock or stone. <br />
            <br /> I am a 2/4 Triple split Emotional Generator which means that
            I am always looking for energy that could ignite and match my
            passion for building better versions.
          </p>
        </div>
      </div>
    </section>
  );
};
