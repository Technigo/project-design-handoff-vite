import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #FDF8F5;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  padding: 32px 0px;
  width: 380px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const Circle = styled.div`
  border-radius: 117px;
  background: #55A4A1;
  width: 234px;
  height: 234px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  gap: 10px;
`;

const IconWrapper = styled.div`
  width: 91px;
  height: 106px;
  flex-shrink: 0 0 91 106;
`;

const Title = styled.h2`
  color: #545F71;
  text-align: center;
  font-family: Cabin;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.48px;
`;

const Description = styled.p`
  color: #545F71;
  text-align: center;
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 175% */
  letter-spacing: -0.32px;
`;

const Button = styled.button`
  background-color: #E07C3E;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s;

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

