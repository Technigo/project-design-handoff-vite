import styled from 'styled-components';
import { Grid } from '../ui/Grid';
import { HeaderCard } from '../components/HeaderCard';
import { Logo } from '../ui/Logo';
import { BodyText } from '../ui/Typography';
import { Icon } from '../ui/Icon';

const StyledHeaderSection = styled.section`
 grid-column: span 4;
 padding-left: 1rem;
 padding-right: 1rem;
 width: 100%;

  @media (min-width: 768px) {
    grid-column: span 8;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    grid-column: span 12;
  }
`

export const HeaderSection = () => {
  return (
    <>
      <StyledHeaderSection>
        <Grid>
          <HeaderCard>
            <Logo src="../../src/assets/HeaderSun.png" alt="alt"></Logo>
            <BodyText>Kindness & Compassion</BodyText>
            <Icon src="../../src/assets/Search.svg" alt="Search"></Icon>
            <Icon scr="../../src/assets/Menu.svg" alt="Menu"></Icon>
          </HeaderCard>
        </Grid>
      </StyledHeaderSection >
    </>
  );
}


