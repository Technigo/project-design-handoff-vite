import React from "react";
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const AnimationContainer = styled.div`
  width: 380px;
  height: 134px;
  display: flex;
  flex-shrink: 0;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: #FDF8F5;
`;

const StaticText = styled.span`
  color: #545F71;
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 225% */
  letter-spacing: -0.16px;
`;

const DynamicText = styled.span`
  color: #1C7D79;
  font-family: Schoolbell;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 150% */
  letter-spacing: -0.24px;
`;

export const Animation = () => {
  const phrases = [
    "får äta sig mätta",
    "kan gå i skolan",
    "får uppleva en trygg jul"
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
    <AnimationContainer>
      <StaticText>Tack för att du är med och bidrar till att barn</StaticText>
      <DynamicText>{phrases[index]}</DynamicText>
    </AnimationContainer>
  )
}