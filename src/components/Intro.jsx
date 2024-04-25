import styled from "styled-components";

export const Intro = () => {
  return (
    <StyledIntro>
      <h2>FIND WHAT MOVES YOU</h2>
      <p>
        Whether you&apos;re a beginner or aiming to take your fitness to the
        next level, bring the full studio experience into your home. Join
        classes designed to nourish body, mind, and spirit. With Liftly you can
        track your work out, add daily routines and goals.
      </p>
    </StyledIntro>
  );
};

//Styled Components

const StyledIntro = styled.section`
  margin: 0 24px;

  @media screen and (min-width: 834px) {
    margin: 0 32px;
  }

  h2 {
    font-weight: bold;
    font-size: 36px;
    margin-bottom: 32px;
  }

  p {
    font-size: 20px;
    line-height: 38px;
  }
`;
