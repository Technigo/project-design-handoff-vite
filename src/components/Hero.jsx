import heroImage from "../assets/heroSectionImages/heroimage.png";
import styled from "styled-components";

export const Hero = () => {
  return (
    <div>
      Hero section
      <HeroSection>
        <h1>Master your board!</h1>
        <HeroContent>
          <p>
            Join us at our Snowboard Camps and unleash your inner Powder Betty!
          </p>
        </HeroContent>
      </HeroSection>
    </div>
  );
};

const HeroSection = styled.div`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: top;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 600px;
`;

const HeroContent = styled.div`
  color: var(--Powder-Black, #0b1623);
  /* Powder/Mobile/Hero text */
  font-family: Mulish;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  display: flex;
`;
