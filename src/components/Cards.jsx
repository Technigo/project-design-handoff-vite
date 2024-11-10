import React from 'react';
import styled, { keyframes } from 'styled-components';

const CardContainer = styled.div`
  background-color: #FDF8F5;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  padding: 32px 16px;
  width: 80%;
  max-width: 380px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  min-height: 538px; 
  flex-grow: 1;   

  @media (min-width: 1600px) {
    min-height: 565px;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  background: #55A4A1;
  width: 234px;
  height: 234px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const IconWrapper = styled.div`
  width: 91px;
  height: 106px;
`;

const Title = styled.h2`
  color: #545F71;
  text-align: center;
  font-family: Cabin;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.48px;
  margin: 16px 0;
`;

const Description = styled.p`
  color: #545F71;
  text-align: center;
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.32px;
  margin: 16px 0;
  flex-grow: 1;
`;

/* Snowflake animation */
const snowingEffect = keyframes`
  0% { transform: translateY(-20px); opacity: 1; }
  100% { transform: translateY(80px); opacity: 0; }
`;

/* Button styling */
const Button = styled.button`
  background-color: #E07C3E;
  color: #FFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Open Sans";
  font-weight: 700;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 280px;
  height: 40px;
  font-size: 18px;
  padding: 10px;
  position: relative;
  overflow: hidden;

  /* Tablet adjustments */
  @media (min-width: 768px) {
    height: 45px;
    font-size: 18px;
  }

  /* Desktop adjustments */
  @media (min-width: 1025px) {
    height: 48px;
    font-size: 20px;
  }

  /* Hover effects */
  &:hover {
    background-color: #C25A1A;
    box-shadow: 0 0 15px rgba(248, 173, 127, 0.6);
    transform: scale(1.05);
  }

  /* Snowflakes appear in the :hover state */
  &:hover::before,
  &:hover::after,
  &:hover span::before {
    content: "❄️";
    position: absolute;
    font-size: 16px;
    color: #FFF;
    filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.8));
    animation: ${snowingEffect} 1.5s linear infinite;
  }

  &:hover::before {
    top: -20px;
    left: 20%;
    animation-delay: 0s;
  }
  &:hover::after {
    top: -20px;
    left: 60%;
    animation-delay: 0.5s;
  }
  &:hover span::before {
    top: -20px;
    left: 80%;
    animation-delay: 1s;
  }

  /* Additional falling snowflakes on hover */
  &:hover span::after {
    content: "❄️";
    position: absolute;
    font-size: 16px;
    color: #FFF;
    top: -20px;
    left: 40%;
    animation: ${snowingEffect} 1.5s linear infinite;
    animation-delay: 0.75s;
    filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.8));
  }

  /* Change background color on click */
  &:active {
    background-color: #F8AD7F;
  }
`;

export const Card = ({ icon, title, description, buttonText }) => (
  <CardContainer>
    <Circle>
      <IconWrapper>{icon}</IconWrapper>
    </Circle>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button>
      <span>{buttonText}</span>
    </Button>
  </CardContainer>
);
