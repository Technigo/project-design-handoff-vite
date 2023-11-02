import { FollowUsIconsDark } from "../components/ReusableComponents/FollowUs/FollowUsIconsDark";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StyledAboutUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //width: 100%;
`;

const StyledHeading = styled.h3`
  //color: #081957;
  text-align: center;
  font-size: 28px;
  //font-style: normal;
  font-weight: 600;
  //line-height: normal;
  margin: 20px 0 40px;
  text-transform: uppercase;
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
  //font-style: normal;
  font-weight: 600;
  //line-height: normal;
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
`;

const TextWrapper = styled.div`
  //max-width: 100%;
  height: 125px;
`;

const WhoWeAreText = styled.p`
  font-size: 16px;
  //font-style: normal;
  font-weight: 400;
  //line-height: normal;
`;

const FindUsText = styled.p`
  text-align: center;
  white-space: pre-line;
  /* För studio location
  font-size: 16px;
  //font-style: normal;
  font-weight: 600;
  //line-height: normal;*/

  font-size: 16px;
  //font-style: normal;
  font-weight: 400;
  //line-height: normal;
`;
const ContactTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ContactText = styled.p`
  text-align: center;
  font-size: 16px;
  //font-style: normal;
  font-weight: 400;
  //line-height: normal;
`;

const StudioLocation = styled.span`
  font-weight: 600; // Set the desired font weight
`;

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
  const locationText = parseAddress(t("aboutUs.location"));

  return (
    <StyledAboutUs>
      <StyledHeading>{t("aboutUs.heading")}</StyledHeading>
      <Wrapper>
        <StyledSubHeading>{t("aboutUs.weAre")}</StyledSubHeading>
        <TextWrapper>
          <WhoWeAreText>{t("aboutUs.weAreDescription")}</WhoWeAreText>
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
    </StyledAboutUs>
  );
};
