import { FollowUsIconsDark } from "../components/ReusableComponents/FollowUs/FollowUsIconsDark";
import { useTranslation } from "react-i18next";
//import { useMediaQuery } from "react-responsive"; // Import the media query hook
import styled from "styled-components";

const StyledAboutUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //width: 100%;
  margin-top: 103px;

  @media screen and (min-width: 1024px) {
    padding: 20px 0px 80px;
  }
`;

const StyledHeading = styled.h3`
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  margin: 20px 0 40px;
  text-transform: uppercase;
`;

const AboutUsContainer = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 60px;
  }
`;

const StyledSubHeading = styled.h4`
  display: flex;
  //width: 230px;
  //height: 46px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Wrapper = styled.div`
  display: flex;
  //width: 387px;
  height: 197px;
  padding: 0px 24px;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 1024px) {
    width: 300px;
  }
`;

const TextWrapper = styled.div`
  //max-width: 100%;
  height: 125px;

  /* @media screen and (min-width: 1024px) {
    text-align: left;
  } */
`;

const WhoWeAreText = styled.p`
  text-align: center;
  white-space: pre-line;
  font-size: 16px;
  font-weight: 400;

  /* @media screen and (min-width: 1024px) {
    text-align: left;
  } */
`;

const FindUsText = styled.p`
  text-align: center;
  white-space: pre-line;
  font-size: 16px;
  font-weight: 400;

  /* @media screen and (min-width: 1024px) {
    text-align: left;
  } */
`;
const ContactTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1024px) {
    gap: 50px;
  }
`;

const ContactText = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 400;

  /* @media screen and (min-width: 1024px) {
    text-align: left; 
  }*/
`;

const StudioLocation = styled.span`
  font-weight: 600; // Set the desired font weight
`;

const parseWhoWeAre = (description) => {
  const parts = description.split("\n");
  return (
    <>
      {parts[0]}
      {"\n"}
      {parts.slice(1).join("\n")}
    </>
  );
};

const parseAddress = (address) => {
  const parts = address.split("\n");
  return (
    <>
      <StudioLocation>{parts[0]}</StudioLocation>
      {"\n"}
      {parts.slice(1).join("\n")}
    </>
  );
};

export const AboutUsPage = () => {
  const { t } = useTranslation(); // Use useTranslation to get the 't' function
  const descriptionText = parseWhoWeAre(t("aboutUs.weAreDescription"));
  const locationText = parseAddress(t("aboutUs.location"));

  return (
    <StyledAboutUs>
      <StyledHeading>{t("aboutUs.heading")}</StyledHeading>
      <AboutUsContainer>
        <Wrapper>
          <StyledSubHeading>{t("aboutUs.weAre")}</StyledSubHeading>
          <TextWrapper>
            <WhoWeAreText>{descriptionText}</WhoWeAreText>
          </TextWrapper>
        </Wrapper>
        <Wrapper>
          <StyledSubHeading>{t("aboutUs.findUs")}</StyledSubHeading>
          <TextWrapper>
            <FindUsText>{locationText}</FindUsText>
          </TextWrapper>
        </Wrapper>
        <Wrapper>
          <StyledSubHeading>{t("aboutUs.contactUs")}</StyledSubHeading>
          <ContactTextWrapper>
            <ContactText>
              info@saddleup.com
              <br />
              +46724 53 45 78
            </ContactText>
            <FollowUsIconsDark />
          </ContactTextWrapper>
        </Wrapper>
      </AboutUsContainer>
    </StyledAboutUs>
  );
};
