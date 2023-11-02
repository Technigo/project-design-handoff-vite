import { Button } from "../../../reusableComp/Button";
import { NormalText } from "../../../reusableComp/NormalText";
import { SubHeading } from "../../../reusableComp/SubHeading";
import styled from "styled-components";

const Days40Section = styled.section`
  color: white; 
  background-color: var(--popping-orange);
  display: flex;
  padding-top: 24px;
  padding-bottom: 24px;
  flex-direction: column;
  align-items: center;
`;

const SpecialSpan1 = styled.span`
  font-weight: bold;
  color: red;
`;

const SpecialSpan2 = styled.span`
  font-weight: bold;
  color: blue;
`;

export const Days40 = () => {
  return (
    <>
      <Days40Section>
        <SubHeading text={'40 DAYS WITH ME'} />
        <NormalText
          text={
            'Doing lifestyle changes on your own takes a lot more of you than it needs to do.'
          }
        />
        <NormalText
          text={
            'With a daily morning practice with Kundalini Yoga you are aligning yourself with all of the magical energy from a golden lineage of teachers, practitioners and the Divine.'
          }
        />
        <NormalText
          text={'I call it ACCOUNTABILITY DELUXE.'}
        />
        <NormalText
          text={
            'We start together with a clarity call to find out if I am the teacher for you.'
          }
        />
        <NormalText
          text={
            'Our energy needs to be a perfect match! If it is a FULLBODY YES, I am preparing a unique, tailor-made Sadhana for you.'
          }
        />
        <NormalText
          text={
            'Meditation, Breath work, and Yoga in a perfect blend for your transformation.'
          }
        />
        <NormalText
          text={
            'And then you start building your life. From within, from your CLARITY. Every morning you are releasing ENERGY with DEVOTION to your Sadhana.'
          }
        />
        <Button className={'i-am-ready-btn'} btnText={"I AM READY, LET'S START"} />
      </Days40Section>
    </>
  );
};