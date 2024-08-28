import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 120vh;
  background: url("/images/sunset.png") no-repeat center center;
  background-size: cover;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    height: 100vh;
  }

  @media (max-width: 725px) {
    height: 80vh;
  }
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
  white-space: pre-wrap;

  @media (max-width: 1200px) {
    font-size: 58px;
    line-height: 70px;
  }

  @media (max-width: 725px) {
    font-size: 40px;
    line-height: 40px;
  }
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
