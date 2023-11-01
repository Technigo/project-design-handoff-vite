import styled from "styled-components";
import data from "../assets/images.json";

const HeroBack = styled.img`
  width: 587px;
  height: 323px;
  position: relative;
`

const BigText = styled.div`
  width: 346px;
  height: 36px;
  color: #6A4093;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 131%; /* 26.2px */
  letter-spacing: -0.44px;
  position: absolute;
  top: 90px;
  left: 50px;
`

const SmallText = styled.div`
  width: 324px;
  color: #6A4093;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 131%; /* 20.96px */
  letter-spacing: -0.352px;
  position: absolute;
  top: 120px;
  left: 50px;
`;

export const Hero = () => {
  return (
    <>
      <HeroBack src={data['heroImage']} alt="Background" />
      <BigText>Play Parkour</BigText>
      <SmallText>
        Treat your life as an adventure - all your life
      </SmallText>
    </>
  );
};

