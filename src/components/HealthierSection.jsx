import styled from 'styled-components';
import Button from "../utility/Button";
import { breakpoints } from "../utility/breakpoints";

export const HealthierSection = () => {
  return (
    <>
      <StyledSection>
        <FlexContainer>
          <Text>
            Your path to a healthier lifestyle starts here! Take your first step to feeling inner balance and peace.
          </Text>
        </FlexContainer>
        <CtaButton>Continue to Book</CtaButton>
      </StyledSection>
    </>
  );
};

// Styled-components styles
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 64px 32px;
  position: relative;
  gap: 32px;
  width: 390px;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 64px 64px 64px 64px;
    
  }
  @media (min-width: ${breakpoints.desktop}) {
    padding: 64px 0px 64px 0px;
  }
`;

const Text = styled.p`
  font-family: Fira Sans;
  font-size: 20px;
  font-weight: 600;
  color: rgba(8, 61, 86, 1);
  line-height: 32px;
  text-align: left;
  display: block;
  width: 294px;
  position: relative;
  white-space: pre-wrap;

  @media (min-width: ${breakpoints.tablet}) { /* Tablet */
    font-size: 26px;
    line-height: 40px;
    width: 642px;
    font-weight: 500;
  }
  @media (min-width: ${breakpoints.desktop}) { /* desktop */
    font-size: 28px;
    line-height: 48px;
    width: 10562px;
    font-weight: 500;
    margin-left: 50px;
    margin-right: 50px;
  }
`;

const CtaButton = styled(Button)`
  display: block;
  position: relative;
  justify-content: flex-start;
  align-items: flex-start;
  left: 170px;


 /*  &:active {
    background-color: #00000066;
    background-image: linear-gradient(to bottom, #00000066 40%, transparent 40%, transparent 60%, #00000066 60%);
    color: #063145;
  }
 */
  @media (min-width: ${breakpoints.tablet}) { /* Tablet */
    justify-content: flex-end;
    align-items: flex-end;
  }
  @media (min-width: ${breakpoints.desktopt}) { /* desktop */
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  padding: 32px 16px 32px 16px;
  gap: 0;

  @media (min-width: ${breakpoints.tablet}) { /* Tablet */
    padding: 64px 64px 64px 64px;
  }
  @media (min-width: ${breakpoints.desktopt}) { /* desktop */
    padding: 64px 128px 64px 128px;
  }
`;

