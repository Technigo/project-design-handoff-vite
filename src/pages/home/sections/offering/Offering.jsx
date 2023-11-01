import { Button } from "../../../../components/reusable/Button";
import "./Offering.css";
import { SectionTitle } from "../../../../components/reusable/SectionTitle";

export const Offering = () => {
  return (
    <section id="offering">
      <div className="page-wrapper">
        <SectionTitle title="40 days with me" />
        <p>
          Doing lifestyle changes on your own takes a lot more of you than it
          needs to do. With a daily morning practice with Kundalini Yoga you are
          aligning yourself with all of the magical energy from a golden lineage
          of teachers, practitioners and the Divine.
        </p>
        <p>
          I call it{" "}
          <span className="changing-words">accountability Deluxe.</span>
        </p>
        <p>
          We start together with a clarity call to find out if I am the teacher
          for you. Our energy need to be a perfect match! If it is a FULLBODY
          YES I am preparing a unique, tailor made Sadhana for you.
        </p>
        <p>
          Meditation, Breath work and Yoga in a perfect blend for your
          transformation.
        </p>
        <p>
          And then you start building your life. From within, from your{" "}
          <span className="single-word">CLARITY</span>. Every morning you are
          releasing <span className="single-word">ENERGY</span> with{" "}
          <span className="single-word">DEVOTION</span> to your Sadhana.
        </p>
        <Button textContent="I am ready, let's start" />
      </div>
    </section>
  );
};
