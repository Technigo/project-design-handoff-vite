import React from 'react';
import styled from 'styled-components';
import { AchievementElement } from '../ui/AchievementElement';
import { AchievementsTitle } from '../ui/Typography';

const AchievementsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 500px;
  margin: 0 auto;
`;

const AchievementsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1.5rem;
  width: 100%; 
`;

export const Achievements = () => {
  return (
    <AchievementsSection>
      <AchievementsTitle>Vår spridning</AchievementsTitle>
      <AchievementsContainer>
        <AchievementElement number="53" label="Samtalsgrupper" color="#82E1DF" />
        <AchievementElement number="25" label="Volontärer" color="#F0EC92" />
        <AchievementElement number="88" label="Aktiviteter" color="#D3D3D3" />
      </AchievementsContainer>
    </AchievementsSection>
  );
};
