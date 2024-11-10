import styled from 'styled-components';
import { Grid } from '../ui/Grid';
import { WelcomeCard } from '../components/WelcomeCard';
import { Headline1, BodyText } from '../ui/Typography';
import WelcomeButton from '../ui/WelcomeButton';

const StyledWelcomeContainer = styled.section`
  width: 100%;
  padding: 2rem 1rem 2.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: span 4;

  @media (min-width: 768px) {
    grid-column: span 8;
  }

  @media (min-width: 1200px){
    grid-column: span 12;
  }
`;

const WelcomeContent = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Welcome = () => {
  return (
    <StyledWelcomeContainer>
      <Grid>
        <WelcomeCard>
          <WelcomeContent>
            <Headline1>Välkommen till Kindness & Compassion</Headline1>
            <BodyText>
              Kindness & Compassion är en rörelse med visionen att skapa ett vänligare samhälle. Vi skapar mötesplatser och inspirerar till goda handlingar.
            </BodyText>
            <BodyText>
              Vårt mål är att bygga broar mellan människor och sprida vänlighet. Genom samtalsgrupper och enkla vardagliga handlingar kan vi göra skillnad.
            </BodyText>
            <BodyText>
              Ingen kan göra allt, men alla kan göra något. Tillsammans skapar vi en mer inkluderande värld.
            </BodyText>
            <WelcomeButton>Var med och gör skillnad</WelcomeButton>
          </WelcomeContent>
        </WelcomeCard>
      </Grid>
    </StyledWelcomeContainer>
  );
};
