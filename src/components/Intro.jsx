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

const StyledIntro = styled.div`
  margin: 0 24px;

  h2 {
    font-weight: bold;
    font-size: 36px;
    letter-spacing: 11px;
    margin-bottom: 32px;
  }

  p {
    font-size: 20px;
    letter-spacing: 11px;
    line-height: 38px;
  }
`;
