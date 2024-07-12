import styled from "styled-components";

const AboutContainer = styled.section`
  background: #ffffff;
  height: 462px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 16px;
  @media (min-width: 744px) {
    padding: 20px 24px;
  }
  @media (min-width: 1024px) {
    padding: 20px 80px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const AboutTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  @media (min-width: 1024px) {
    align-items: flex-start;
    gap: 0px;
  }
`;

const AboutSubtitle = styled.h1`
  font-family: "Argue", sans-serif;
  font-size: 48px;
  font-weight: 400;
  color: #620981;
  text-align: center;
  margin: 0;
  @media (min-width: 744px) {
    font-size: 64px;
  }
  @media (min-width: 1024px) {
    font-size: 64px;
  }
`;

const AboutTitle = styled.h1`
  font-family: "Argue", sans-serif;
  font-size: 96px;
  font-weight: 400;
  color: #620981;
  text-align: center;
  margin: 0;
  @media (min-width: 744px) {
    font-size: 124px;
  }
  @media (min-width: 1024px) {
    font-size: 124px;
  }
`;

const AboutText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  text-align: left;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 33px;
  align-items: center;
  max-width: 100%;
  padding-bottom: 20px;
  margin-top: 15px;
  line-height: 24px;
  @media (min-width: 1024px) {
    max-width: 50%;
  }
`;

export const About = () => {
  return (
    <AboutContainer>
      <AboutTitleWrapper>
        <AboutSubtitle>About</AboutSubtitle>
        <AboutTitle>SHANTI</AboutTitle>
      </AboutTitleWrapper>
      <AboutText>
        <span>
          Shanti believes in fostering inner peace and personal growth. Our
          mission is to provide urban sanctuaries where individuals can connect,
          explore, and find resilience.
        </span>{" "}
        <span>
          Named after the Sanskrit word for &#34;peace&#34;, Shanti encapsulates
          our commitment to fostering inner tranquility and empowerment among
          our students.
        </span>
      </AboutText>
    </AboutContainer>
  );
};
