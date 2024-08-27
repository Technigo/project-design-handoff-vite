import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 789px; /* Height of the visible part of the image */
  background: url("/images/sunset.png") no-repeat center center;
  background-size: cover;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-family: "Argue DEMO", sans-serif;
  font-weight: 400;
  font-size: 106px;
  line-height: 150px;
  letter-spacing: 5%;
  text-align: center;
  color: #ffffff;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: pre-wrap; /* Allows for text wrapping */
`;

export const Quote = () => {
  return (
    <Container>
      <Text>
        INHALE THE{"\n"}
        FUTURE. EXHALE {"\n"}
        THE PAST.
      </Text>
    </Container>
  );
};
