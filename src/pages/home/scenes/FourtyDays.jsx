import { SceneTitle } from "../../../components/reusable/SceneTitle";
import { Button } from "../../../components/reusable/Button";
import styled from "styled-components";
import "./FourtyDays.css";

const FourtyDaysWrapper = styled.section`
  background-color: var(--popping-orange);
`;

const FourtyDaysContainer = styled.div`
  padding: 1.5rem 2rem 4rem;
`;

const FourtyDaysP = styled.p`
  margin: 1rem 0;
  line-height: 1.625rem;
  font-size: 1rem;
  color: #d9d9d9;
  text-align: center;
  padding-bottom: 2rem;
`;

export const FourtyDays = () => {
  return (
    <FourtyDaysWrapper>
      <FourtyDaysContainer>
        <SceneTitle className="fd-title" title="40 days with me" />
        <FourtyDaysP>
          Doing lifestyle changes on your own takes a lot more of you than it
          needs to do. <br /> With a daily morning practice with Kundalini Yoga
          you are aligning yourself with <br /> all of the magical energy from a
          golden lineage of teachers, practitioners and the Divine. <br />{" "}
          <br /> I call it <span className="font">accountability Deluxe.</span>{" "}
          <br />
          <br /> We start together with a clarity call to find out if I am the
          teacher for you. <br /> Our energy need to be a perfect match! If it
          is a FULLBODY YES I am preparing a unique, tailor made Sadhana for
          you. <br />
          <br />
          Meditation, Breath work and Yoga in a perfect blend for your
          transformation. <br />
          <br /> And then you start building your life. From within, from your{" "}
          <span className="font2">CLARITY</span>. Every morning you are
          releasing <span className="font2">ENERGY</span> with{" "}
          <span className="font2">DEVOTION</span> to your Sadhana.
        </FourtyDaysP>
        <Button textContent="I am ready, let's start" />
      </FourtyDaysContainer>
    </FourtyDaysWrapper>
  );
};
