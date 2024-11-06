import styled from 'styled-components'
import { Grid } from '../ui/Grid'
import { WelcomeCard } from '../components/WelcomeCard'
import { BodyText, Headline1 } from '../ui/Typography'
import { Spacer } from '../ui/Spacer'

const StyledWelcomeContainer = styled.section`
 grid-column: span 4;
 padding: 2rem 1rem 2.5rem 1rem;

  @media (min-width: 768px) {
    grid-column: span 8;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    grid-column: span 12;
  }
`
export const Welcome = () => {
  return (
    <>
      <StyledWelcomeContainer>
        <Grid>
          <WelcomeCard>
            <Headline1>Välkommen till Kindness & Compassion</Headline1>
            <Spacer>
              <BodyText>
                Kindness & Compassion är en rörelse med visionen att skapa ett vänligare samhälle.Vi skapar mötesplatser och inspirerar till goda handlingar.
              </BodyText>
            </Spacer>
            <Spacer>
              <BodyText>
                Vårt mål är att bygga broar mellan människor och sprida vänlighet. Genom samtalsgrupper och enkla vardagliga handlingar kan vi göra skillnad.
              </BodyText>
            </Spacer>
            <Spacer>
              <BodyText>
                Ingen kan göra allt, men alla kan göra något. Tillsammans skapar vi en mer inkluderande värld.
              </BodyText>
            </Spacer>
          </WelcomeCard>
        </Grid>
      </StyledWelcomeContainer >
    </>
  )
}
