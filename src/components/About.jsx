// fixed and checked -> all done here 🌈//

import styled from "styled-components";

//styles
const AboutContainer = styled.section`
  padding: 68px 16px;
  background: var(--primary-white);

  @media all and (min-width: 744px) {
    padding: 44px 24px;
  }

  @media all and (min-width: 1024px) {
    padding: 148px 124px;
    display: flex;
  }
`;

const AboutTitleWrapper = styled.div`
  @media all and (min-width: 744px) {
    display: flex;
    justify-content: center;
    padding-bottom: 23px;
  }
  @media all and (min-width: 1024px) {
    flex-direction: column;
    padding-bottom: 0;
  }
`;

const AboutTitle = styled.h1`
  font-family: Argue;
  font-size: 48px;
  color: var(--primary-prpl);
  text-align: center;
  padding-bottom: 9px;

  @media all and (min-width: 744px) {
    font-size: 40px;
    padding-bottom: 0;
  }

  @media all and (min-width: 1024px) {
    font-size: 112px;
    text-align: left;
    padding-right: 36px;
  }
`;

const AboutSubtitle = styled.h1`
  font-family: Argue;
  font-size: 24px;
  color: var(--primary-prpl);
  text-align: center;

  @media all and (min-width: 744px) {
    font-size: 40px;
  }

  @media all and (min-width: 1024px) {
    font-size: 64px;
    text-align: left;
    padding-bottom: 25px;
  }
`;

const AboutText = styled.p`
  font-size: 14px;
  text-align: center;

  @media all and (min-width: 1024px) {
    font-size: 16px;
    text-align: left;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 36px;
    align-items: center;
  }
`;

//component
export const About = () => {
  return (
    <AboutContainer>
      <AboutTitleWrapper>
        <AboutSubtitle>About&#160;</AboutSubtitle>
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
