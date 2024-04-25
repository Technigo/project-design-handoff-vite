import { BannerWrapper, Banner, BannerContainer, TitleText, SubText, Email, BannerInvert } from './Banner-section.jsx'
import { CtaButton } from './CTA-button.jsx'

export const Newsletter = () => {
  return (
    <BannerWrapper>
      <Banner />
      <BannerContainer>
        <TitleText>Newsletter</TitleText>
        <SubText>Sign up & receive exclusive news about your club, campaigns and events!</SubText>
        <Email type="email" placeholder="Enter your email address here"/>
        <CtaButton>Subscribe</CtaButton>
      </BannerContainer>
      <BannerInvert />
    </BannerWrapper>
  )
}

