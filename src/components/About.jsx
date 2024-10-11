import { useState } from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  background: #ffffff;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  padding: 10px 16px;

  @media (min-width: 1024px) {
    padding: 40px 80px;
  }

  @media (min-width: 451px) and (max-width: 1240px) {
    min-height: 50vh;
    padding: 30px 16px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) and (max-width: 1240px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (min-width: 1240px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const AboutTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  @media (max-width: 450px) {
    margin-top: 50px;
  }

  @media (min-width: 451px) and (max-width: 1240px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-align: center;
  }

  @media (min-width: 1240px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
`;

const AboutSubtitle = styled.h1`
  font-family: "Argue", sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: #620981;
  text-align: center;
  margin: 0;

  @media (max-width: 450px) {
    font-size: 24px;
  }

  @media (min-width: 451px) and (max-width: 1240px) {
    font-size: 40px;
  }

  @media (min-width: 1240px) {
    font-size: 64px;
  }
`;

const AboutTitle = styled.h1`
  font-family: "Argue", sans-serif;
  font-size: 48px;
  font-weight: 400;
  color: #620981;
  text-align: center;
  margin: 0;

  @media (max-width: 450px) {
    font-size: 48px;
  }

  @media (min-width: 451px) and (max-width: 1240px) {
    font-size: 40px;
  }

  @media (min-width: 1240px) {
    font-size: 124px;
  }
`;

const AboutText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  text-align: left;
  line-height: 24px;
  margin-top: 15px;
  padding-bottom: 20px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 50%;

  @media (min-width: 451px) and (max-width: 1240px) {
    display: block;
    max-width: 90%;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    margin-top: 25px;
    display: block;
  }

  @media (max-width: 450px) {
    text-align: center;
    font-size: 14px;
    max-width: 90%;
    display: -webkit-box;
    -webkit-line-clamp: ${(props) => (props.isExpanded ? "unset" : "4")};
    -webkit-box-orient: vertical;
    overflow: hidden;
    max-height: ${(props) => (props.isExpanded ? "none" : "74px")};
  }
`;

const ReadMoreLink = styled.a`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: black;
  cursor: pointer;
  text-decoration: none;
  margin-top: 25px;
  display: none;

  @media (max-width: 450px) {
    display: flex;
    margin-bottom: 50px;
  }
`;

const ArrowIcon = styled.img`
  width: 47.5px;
  height: 14px;
  margin-left: 15px;
  align-self: center;
`;

export const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <AboutContainer>
      <ContentWrapper>
        <AboutTitleWrapper>
          <AboutSubtitle>About</AboutSubtitle>
          <AboutTitle>SHANTI</AboutTitle>
        </AboutTitleWrapper>
        <AboutText isExpanded={isExpanded}>
          <span>
            Shanti believes in fostering inner peace and personal growth. Our
            mission is to provide urban sanctuaries where individuals can
            connect, explore, and find resilience.
          </span>
          <span>
            Named after the Sanskrit word for &#34;peace&#34;, Shanti
            encapsulates our commitment to fostering inner tranquility and
            empowerment among our students.
          </span>
        </AboutText>
        <ReadMoreLink onClick={toggleExpanded} href="#read-more">
          {isExpanded ? "Read less" : "Read more"}
          <ArrowIcon src="/icons/arrow.svg" alt="Arrow icon" />
        </ReadMoreLink>
      </ContentWrapper>
    </AboutContainer>
  );
};
