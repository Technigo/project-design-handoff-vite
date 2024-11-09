import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #FDF8F5;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  padding: 32px 16px;
  width: 100%;
  max-width: 380px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

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
  width: 330px;
  height: 40px; /* General button height for better visibility */

  /* Mobile font-size */
  font-size: 18px;
  padding: 10px;

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

  &:hover {
    background-color: #C25A1A;
  }
`;

export const Card = ({ icon, title, description, buttonText }) => (
  <CardContainer>
    <Circle>
      <IconWrapper>{icon}</IconWrapper>
    </Circle>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button>{buttonText}</Button>
  </CardContainer>
);
