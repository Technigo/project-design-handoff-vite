import React from 'react';
import styled from 'styled-components';
import { CircleText, CircleLabel, AchievementsTitle } from './Typography';

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color || '#D3D3D3'};
  color: black;
  font-weight: 700;
  font-size: 1.5rem;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin: 0 auto;
`;

export const AchievementElement = ({ number, label, color }) => {
  return (
    <div>
      <Circle color={color}>
        <CircleText>{number}</CircleText>
      </Circle>
      <CircleLabel>{label}</CircleLabel>
    </div>
  );
};
