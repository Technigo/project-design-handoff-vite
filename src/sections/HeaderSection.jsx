import styled from 'styled-components';
import { Logo } from '../ui/Logo';
import { HeaderText } from '../ui/Typography';
import { Icon } from '../ui/Icon';

const StyledHeaderSection = styled.section`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 400px) {
    padding: 0rem 0rem;
    display: flex;
    flex-direction: row;
    gap: 0.2rem;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; 
  margin-right: 5px;
`;

export const HeaderSection = () => {
  return (
    <StyledHeaderSection>
      <Logo src="/assets/HeaderSun.png" alt="Kindness & Compassion logo" />
      <HeaderText>Kindness & Compassion</HeaderText>
      <RightSection>
        <Icon src="/assets/Search.svg" alt="Search" />
        <Icon src="/assets/Menu.svg" alt="Menu" />
      </RightSection>
    </StyledHeaderSection>
  );
};
