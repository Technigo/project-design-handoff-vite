import styled from "styled-components";

//styles
const AboutContainer = styled.section`
  background: var(--primary-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 378px;
  padding: 30px;
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const AboutTitle = styled.h1`
  font-family: Argue;
  font-size: 48px;
  color: var(--primary-prpl);
  text-align: center;
`;

const AboutText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  text-align: center;
`;

//component
// To do:
// 1) Mobile: "about" smaler and on top of SHANTI
// 2) Tablet: check padding
// 3) Desktop: style with 3 rows and "about" smaler and on top of "SHANTI"

export const About = () => {
  return (
    <AboutContainer>
      <AboutWrapper>
        <AboutTitle>About SHANTI</AboutTitle>
        <AboutText>
          Shanti believes in fostering inner peace and personal growth. Our
          mission is to provide urban sanctuaries where individuals can connect,
          explore, and find resilience. Named after the Sanskrit word for
          &#34;peace,&#34; Shanti encapsulates our commitment to fostering inner
          tranquility and empowerment among our students.
        </AboutText>
      </AboutWrapper>
    </AboutContainer>
  );
};
