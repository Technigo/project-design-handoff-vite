import styled from "styled-components";
import greenBackground from "../assets/green-background.svg";
import profileImage from "../assets/unsplash_profile_by-Gabriel-Silverio.jpeg";

const Section = styled.section`
  background: bottom right / cover no-repeat url(${greenBackground});
  height: 252px;
  width: 100%;

  @media all and (min-width: 744px) {
    height: 332px;
  }

  @media all and (min-width: 1024px) {
    height: 406px;
  }
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 12px;
  ${({ $text }) =>
    $text && "height: fit-content; gap: 16px; flex-direction: column;"}
  color: var(--text-card-bg);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px; /* 150% */

  @media all and (min-width: 744px) {
    margin: 0 32px;
    font-family: Optima, sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 114.286% */
  }

  @media all and (min-width: 1024px) {
    margin: 0 40px;
    font-size: 32px;
    line-height: 40px; /* 125% */
  }
`;

const Image = styled.img`
  width: 92px;
  height: 100px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 500px;

  @media all and (min-width: 744px) {
    width: 150px;
    height: 166.816px;
  }

  @media all and (min-width: 1024px) {
    width: 223px;
    height: 248px;
  }
`;

export const Quote = () => {
  return (
    <Section>
      <Container>
        <Container $text>
          <p>
            “My vision is that all women, no matter background or level is gonna
            find their way to thrive through fitness and health.”{" "}
          </p>
          <p>
            -Aine Gough, <br></br> Founder of Thrive Fitness
          </p>
        </Container>
        <Image
          src={profileImage}
          alt="Woman with red hair smiling"></Image>
      </Container>
    </Section>
  );
};
