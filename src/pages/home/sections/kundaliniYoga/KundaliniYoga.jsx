import { SectionTitle } from "../../../../components/reusable/SectionTitle";
import "./KundaliniYoga.css";
import { SquareImage } from "../../../../components/reusable/SquareImage";

export const KundaliniYoga = () => {
  return (
    <section id="kundalini-yoga">
      <div className="square-image-container">
        <img className="praying" src="./prayingwoman.png" alt="" />
      </div>
      {/* <SquareImage imgUrl="./prayingwoman.png" imgAlt="" isTwoImages={false} /> */}
      <div className="page-wrapper">
        <SectionTitle className="kundalini-title" title="Kundalini Yoga" />
        <div className="kundalini-info">
          <p>
            Kundalini Yoga is all about transforming energy within yourself.
          </p>
          <br />
          <p>
            When being a regular practitioner of Kundalini Yoga you have an
            efficient way of activating your life force and building up stamina
            to transform that amount of energy in your daily life.
          </p>
        </div>
        <div className="tell-me">
          <span>Tell me EVERYTHING</span>
        </div>
      </div>
      <div className="square-image-container">
        <img className="incense" src="./incense.png" alt="" />
      </div>
      {/* <SquareImage imgUrl="./incense.png" imgAlt="" isTwoImages={false} /> */}
    </section>
  );
};
