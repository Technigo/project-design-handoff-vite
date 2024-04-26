import {
  BannerWrapper,
  Banner,
  BannerContainer,
  TitleText,
  SubText,
  BannerInvert,
} from "./Banner-section.jsx";
import { CtaButton } from "./CTA-button.jsx";

export const Challenge = () => {
  return (
    <BannerWrapper>
      <Banner />
      <BannerContainer>
        <TitleText>Looking for a Challenge?</TitleText>
        <SubText>Save your spot for the next class now!</SubText>
        <CtaButton>Book Now</CtaButton>
      </BannerContainer>
      <BannerInvert />
    </BannerWrapper>
  );
};
