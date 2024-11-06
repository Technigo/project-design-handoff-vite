import styled from "styled-components"
import { Grid } from "../ui/Grid"
import { HeaderBig } from "../ui/Typography"

const StyledHeroSection = styled.section`
  grid-column: span 4;
  width: 100%;
  background-image: url("../../src/assets/hero.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;

  @media (min-width: 768px) {
    grid-column: span 8;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    grid-column: span 12;
  }
`

export const HeaderHeroSection = () => {
  return (
    <>
      <StyledHeroSection>
        <Grid>
          <HeaderBig>
            Sprid en god gärning för en vänligare värld
          </HeaderBig>
        </Grid>
      </StyledHeroSection >
    </>
  )
}