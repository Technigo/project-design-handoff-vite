import styled from "styled-components";

//styles
const AboutContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  /* grid-template-rows: 3; */
  grid-template-areas:
    "subtitle subtitle subtitle subtitle subtitle subtitle subtitle subtitle"
    "title title title title title title title title"
    "text text text text text text text text";
  padding: 68px 16px;
  background: var(--primary-white);

  @media all and (min-width: 744px) {
    grid-template-areas:
      ". . . subtitle title . . . "
      "text text text text text text text text";
    padding: 68px 58px;
  }

  @media all and (min-width: 1024px) {
    grid-template-areas:
      "subtitle subtitle subtitle subtitle text text text text"
      "title title title title text text text text";
    padding: 150px 58px;
  }
`;

const AboutTitle = styled.h1`
  font-family: Argue;
  font-size: 48px;
  color: var(--primary-prpl);
  text-align: center;
  grid-area: title;
  padding-bottom: 10px;

  @media all and (min-width: 744px) {
    font-size: 40px;
  }

  @media all and (min-width: 1024px) {
    font-size: 112px;
    text-align: left;
  }
`;

const AboutSubtitle = styled.h1`
  font-family: Argue;
  font-size: 24px;
  color: var(--primary-prpl);
  text-align: center;
  grid-area: subtitle;

  @media all and (min-width: 744px) {
    font-size: 40px;
  }

  @media all and (min-width: 1024px) {
    font-size: 64px;
    text-align: left;
  }
`;

const AboutText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  text-align: center;
  grid-area: text;
  /* width: 50%; */

  @media all and (min-width: 1024px) {
    font-size: 16px;
    text-align: left;
  }
`;

//component
export const About = () => {
  return (
    <AboutContainer>
      <AboutSubtitle>About&#160;</AboutSubtitle>
      <AboutTitle>SHANTI</AboutTitle>
      <AboutText>
        Shanti believes in fostering inner peace and personal growth. Our
        mission is to provide urban sanctuaries where individuals can connect,
        explore, and find resilience. Named after the Sanskrit word for
        &#34;peace&#34;, Shanti encapsulates our commitment to fostering inner
        tranquility and empowerment among our students.
      </AboutText>
    </AboutContainer>
  );
};
