import heroImage from "../assets/heroSectionImages/heroimage.png";
import styled from "styled-components";
import { HeaderNavbar } from "./HeaderNavbar";

export const Hero = () => {
  return (
    <>
      <HeroSection>
        <HeaderNavbar />
        <HeroContent>
          <h1>Master your board!</h1>
          <p>
            Join us at our Snowboard Camps and unleash your inner Powder Betty!
          </p>
        </HeroContent>
        <div>
          <CtaButton>Explore our camps</CtaButton>
        </div>
      </HeroSection>
    </>
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
  display: flex;
  flex-direction: column;
  h1 {
    color: var(--Powder-Black, #0b1623);
    font-family: Philosopher;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 46.8px */
    letter-spacing: 1.08px;
    padding-left: 24px;
  }
  p {
    color: var(--Powder-Black, #0b1623);
    /* Powder/Mobile/Hero text */
    font-family: Mulish;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    width: 220px;
    padding-left: 24px;
    margin-bottom: 180px;
  }
`;

const CtaButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 342px;
  height: 48px;

  border-radius: 32px;
  border: 1px solid var(--Powder-Black, #0b1623);
  background: var(--Powder-Accent-2, #f2ff49);
  box-shadow: 2px 3px 0px 0px #0b1623;
  display: ;

  color: var(--Powder-Black, #0b1623);
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 16px */
`;
