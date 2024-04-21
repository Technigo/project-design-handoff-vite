import styled from "styled-components";
import backgroundImage from "../assets/unsplash_tpivPdQgC20_746.jpg";

import { Button } from "./Button";

const Container = styled.div`
  position: relative;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 348px;
  padding: 0 12px;

  @media (min-width: 744px) and (max-width: 1440px) {
    height: 495px;
    align-self: stretch;
    padding: 0 32px;
    // min-width: 746px;
  }
  @media (min-width: 1440px) {
    isplay: flex;
    min-height: 700px;
    flex-direction: column;
    align-items: flex-end;
    // min-width: 1440px;
    align-content: center;
    justify-content: space-evenly;
    padding: 0 32px;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width:; */

  @media (min-width: 744px) and (max-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 224px;
    align-items: center;
    color: var(--text);
    text-align: center;
    justify-content: space-between;
    position: absolute;
    gap: 16px;
    right: 42px;
    top: 84px;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 15px;
  display: flex;
  gap: 16px;
  @media (min-width: 744px) and (max-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
    right: 51px;
    top: 116px;
    transform: none;
    align-items: center;
    button {
      width: 191px;
    }
  }
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`;

const TitleCTA = styled.h2`
  /* width: 430px; */
  margin-top: 10px;
  color: var(--text);
  text-align: center;
  font-family: Optima;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: -0.32px;
  text-align: center;

  @media (min-width: 744px) and (max-width: 1440px) {
    width: 568px;
  }
`;

export const CTA = () => {
  return (
    <Container>
      <StyledWrapper>
        <TitleCTA>
          Ready to take the first step on your fitness journey?
        </TitleCTA>
        <ButtonContainer>
          <Button type="green" />
          <Button type="white" />
        </ButtonContainer>
      </StyledWrapper>
    </Container>
  );
};
