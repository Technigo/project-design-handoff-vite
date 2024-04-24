import { Page, Container, StyledH1 } from "./StyledComponents";

export const About = () => {
  return (
    <Page>
      <Container>
        <StyledH1 style={{ alignSelf: "center" }}>Here is the plan:</StyledH1>
        <div className="about-box">
          <div className="about-content-box">
            <div className="image"></div>
            <div className="text-box"></div>
          </div>
          <div className="dots-box"></div>
        </div>
        <div className="button-box"></div>
      </Container>
    </Page>
  );
};
