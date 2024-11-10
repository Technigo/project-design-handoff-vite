import styled from 'styled-components';
import { Logo } from '../ui/Logo';
import { HeaderText } from '../ui/Typography';
import { Icon } from '../ui/Icon';

const StyledHeaderSection = styled.section`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 400px) {
    padding: 0rem 0rem;
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; 
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; 
`;

export const HeaderSection = () => {
  return (
    <StyledHeaderSection>
      <LeftSection>
        <Logo src="/assets/HeaderSun.png" alt="Kindness & Compassion logo" />
        <HeaderText>Kindness & Compassion</HeaderText>
      </LeftSection>
      <RightSection>
        <Icon src="/assets/Search.svg" alt="Search" />
        <Icon src="/assets/Menu.svg" alt="Menu" />
      </RightSection>
    </StyledHeaderSection>
  );
};
