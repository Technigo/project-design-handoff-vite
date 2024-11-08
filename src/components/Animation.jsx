import React from "react";
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const AnimationBox = styled.div`
  padding-top: 58px;
`;

const AnimationContainer = styled.div`
  width: 380px;
  height: 134px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: #FDF8F5;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers StaticText */
  width: 351px;
  height: 76px;
`;

const StaticText = styled.div`
  color: #545F71;
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 225% */
  letter-spacing: -0.16px;
  align-self: flex-start;
`;

const DynamicText = styled.div`
  color: #1C7D79;
  font-family: Schoolbell;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 150% */
  letter-spacing: -0.24px;
  align-self: flex-start;
  // margin-left: 30px;
`;

export const Animation = () => {
  const phrases = [
    "kan hålla händerna varma",
    "får äta sig mätta",
    "får en julklapp att öppna"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Change the phrase every 2 seconds
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [phrases.length]);
  
  return (
    <AnimationBox>
      <AnimationContainer>
        <TextContainer>
          <StaticText>Tack för att du är med och bidrar till att barn</StaticText>
          <DynamicText>{phrases[index]}</DynamicText>
        </TextContainer>
      </AnimationContainer>
    </AnimationBox>
  );
};
