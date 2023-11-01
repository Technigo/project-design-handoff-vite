import "./Hero.css";
import { Button } from "../../../../components/reusable/Button";
import { SpeechBubble } from "../../../../components/SpeechBubble";
import styled from "styled-components";

const HeroWrapper = styled.section`
  height: 100vh;
  position: relative;
`;

const HeroP = styled.p`
  margin: 1rem 0;
  line-height: 1.9rem;
`;

export const Hero = () => {
  return (
    <HeroWrapper>
      <div className="hero-image"></div>
      <SpeechBubble />
      <div className="hero-container container">
        <h1 className="title">Sat nam, hi!</h1>
        <HeroP>
          My name is Petra <br /> and I am teaching you to <br /> connect all
          aspects of yourself <br /> with your higher self and the Divine by
          using Kundalini Yoga on a daily basis. We call it Sadhana.
        </HeroP>
        <Button
          path="/about"
          classNameContainer="satnam-btn-wrapper"
          textContent="Sat nam, I want more"
          ariaLabel="Click to learn more"
        />
      </div>
    </HeroWrapper>
  );
};
