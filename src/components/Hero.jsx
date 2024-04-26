import styled from "styled-components";
import { Button } from "./Button";
import desktopImage from "../assets/unsplash_Pd5bbWoIUis_Tyler-Nix.jpg";
import tabletImage from "../assets/unsplash-Pd5bbWoIUis_tablet.jpg";
import { useEffect } from "react";

const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: solid 1px black;

  @media all and (min-width: 744px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ $main }) => ($main ? "gap: 32px; padding: 32px 12px" : "gap: 16px")};
  /* padding: ${({ $main }) => ($main ? "32px 12px" : null)}; */
  text-align: center;

  @media all and (min-width: 744px) {
    ${({ $main }) => ($main ? "gap: 40px; padding: 32px" : "gap: 16px;")};
    /* padding: ${({ $main }) => ($main ? "0 32px" : null)}; */
  }

  @media all and (min-width: 1024px) {
    ${({ $main }) =>
      $main ? "gap: 56px; padding: 0 40px; width: 50%;" : "gap: 16px;"};
    /* padding: ${({ $main }) => ($main ? "0 40px" : null)};
    width: ${({ $main }) => ($main ? "50%" : null)}; */
  }
`;

const H1 = styled.h1`
  color: var(--text);
  font-size: 32px;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: -0.32px;
  font-family: Optima;
`;

const Paragraph = styled.p`
  font-family: Optima, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px; /* 116.667% */
`;

const Image = styled.img`
  width: 100%;
  height: initial;
  object-fit: cover;

  @media all and (min-width: 744px) {
    width: 50%;
  }
`;

export const Hero = ({ handleResize, setWindowWidth, windowWidth }) => {
  useEffect(() => {
    const cleanup = handleResize(setWindowWidth); // Using imported handleResize function

    return () => cleanup();
  }, []);

  return (
    <>
      <StyledHero>
        <Image src={windowWidth < 1024 ? tabletImage : desktopImage}></Image>
        <Container $main>
          <Container>
            <H1>FIND YOUR WAY TO THRIVE</H1>
            <Paragraph>
              It’s never to late to start! As a passionate wellness coach I’m
              able to help you finding your path within fitness and health. Join
              our membership gym or book a one on one meeting with me to speak
              more about your wellness journey.
            </Paragraph>
          </Container>
          <Container>
            <Button type="green" />
            <Button type="white" />
          </Container>
        </Container>
      </StyledHero>
    </>
  );
};
