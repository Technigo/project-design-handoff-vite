import styled from "styled-components";

import { breakpoints } from "../utility/breakpoints";
import Button from "../utility/Button";

export const HealthierSection = () => {
  return (
    <>
      <StyledSection>
        <FlexContainer>
          <Text>
            Your path to a healthier lifestyle starts here! Take your first step
            to feeling inner balance and peace.
          </Text>
        </FlexContainer>
        <CtaButton>
          <Button withArrow={true}>Continue to Book</Button>
        </CtaButton>
      </StyledSection>
    </>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  padding: 32px;
  align-items: end;

  @media (min-width: ${breakpoints.tablet}) {
    padding: var(--padding-tablet);
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: var(--padding-desktop);
    gap: 32px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: baseline;
  padding: 32px 16px;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 64px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    padding: 64px;
  }
`;

const Text = styled.h3`
  text-align: left;
  white-space: pre-wrap;
`;

const CtaButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-self: end;
  padding: 0 8px;

  @media (min-width: ${breakpoints.tablet}) {
    justify-content: flex-end;
    padding: 0px 16px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    justify-content: flex-end;
    padding: 0px 24px;
  }
`;
