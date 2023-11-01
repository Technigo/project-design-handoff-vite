import React from "react";
import styled from "styled-components";
import data from "../assets/images.json";

const HeroBack = styled.img`
  width: 587px;
  height: 323px;
  position: relative;
`;

const SecondBack = styled.div`
  background: rgba(25, 130, 196, 0.40);
  width: 587px;
  height: 405px;
  position: relative;
  z-index: 1;
`;

const BigText = styled.div`
  width: 346px;
  height: 36px;
  color: #6A4093;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 131%;
  letter-spacing: -0.44px;
  position: absolute;
  top: 90px;
  left: 50px;
  z-index: 2;
`;

const SmallText = styled.div`
  width: 324px;
  color: #6A4093;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 131%;
  letter-spacing: -0.352px;
  position: absolute;
  top: 120px;
  left: 50px;
  z-index: 2;
`;

const Pictures = styled.div`
  display: flex;
  gap: 3px 35px;
  flex-wrap: wrap;
  position: absolute;
  top: 30em;
  left: 1em;
  z-index: 2;
`;


const Picture = styled.img`
  width: 169px;
  height: 150px;
`;

export const Hero = () => {
  return (
    <>
      <HeroBack src={data.heroImage} alt="Background" />
      <BigText>Play Parkour</BigText>
      <SmallText>
        Treat your life as an adventure - all your life
      </SmallText>

      <SecondBack alt="Background 2" />
      <Pictures>
        {[
          data.image1,
          data.image2,
          data.image3
        ].map((image, index) => (
          <Picture key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </Pictures>
    </>
  );
};
