import { useState } from "react";
import useDeviceType from "../useDeviceType";
import {
  Page,
  StyledText,
  StyledH1,
  StyledButton,
  ButtonBox,
  StyledImage,
  UnderlinedWord,
  StyledH2,
} from "../StyledComponents";
import {
  IconHeart,
  LogoContainer,
  IntroTextBox,
  IntroContentBox,
  HeaderBox,
  NavBox,
  IntroTextButton,
  EasterEggContainer,
  IconTitleBox,
  NamasteIcon,
  OuterContainer,
} from "../StyledIntro";
import ImgIntro from "../../assets/intro-one.jpg";
import { GlassesIcon } from "../StyledAbout";

const Introduction = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHeartVisible, setIsHeartVisible] = useState(true);
  const deviceType = useDeviceType();

  const handleClick = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
    setIsHeartVisible((prevIsHeartVisible) => !prevIsHeartVisible);
  };

  return (
    <Page>
      <HeaderBox>
        <LogoContainer> </LogoContainer>
        {(deviceType === "tablet" || deviceType === "desktop") && (
          <NavBox>
            <StyledText>About us</StyledText>
            <StyledButton
              $mobile={deviceType === "mobile"}
              $tablet={deviceType === "tablet"}
              $desktop={deviceType === "desktop"}
              $backgroundColor="var(--pink)"
              $textColor="var(--blue)"
              $border="2px solid var(--blue)"
              aria-label="contact us">
              CONTACT US
            </StyledButton>
          </NavBox>
        )}
      </HeaderBox>
      {deviceType === "none" && (
        <OuterContainer>
          <EasterEggContainer>
            <IconTitleBox>
              <StyledH1> Congratulations</StyledH1>
              <GlassesIcon $width={"24.67px"} $height={"24px"} />
            </IconTitleBox>
            <StyledText $textAlign={"center"}>
              You&apos;re unable to access this website on your current phone.
            </StyledText>
            <StyledText $textAlign={"center"}>
              But fear not! We are looking for individuals like you to participate in our Midsommar yoga event.
            </StyledText>
            <StyledText $textAlign={"center"}>
              So, simply invite a friend with a newer phone to access this page, and if they succeed, you&apos;ll get
            </StyledText>
            <StyledH2>1 ticket for free</StyledH2>
            <StyledText $textAlign={"center"}>Just remember to insert the code DSFHSIUG!</StyledText>
          </EasterEggContainer>

          <NamasteIcon />
        </OuterContainer>
      )}

      {deviceType !== "none" && (
        <IntroContentBox>
          <StyledImage src={ImgIntro} alt="Introduction Image" />
          <IntroTextButton>
            <IntroTextBox>
              <StyledH1>
                Celebrate <UnderlinedWord>Midsommar</UnderlinedWord> with yoga and friends
              </StyledH1>
              <StyledText>
                Embrace summer vibes doing yoga among friends. Experience energising asanas under the sun and feed your
                mind with a relaxing meditation. Afterwards, indulge in prosecco and delectable treats to celebrate the
                harmony of body and mind.
              </StyledText>
            </IntroTextBox>

            <ButtonBox>
              <StyledButton
                $backgroundColor="var(--red)"
                $textColor="white"
                onClick={handleClick}
                $desktop={deviceType === "desktop"}
                $mobile={deviceType === "mobile"}
                $tablet={deviceType === "tablet"}
                className={`heartIcon ${isClicked ? "clicked" : ""}`}
                aria-label="Book your spot for the Midsommar yoga event">
                <span className={`book ${isClicked ? "clicked" : ""}`}>BOOK YOUR SPOT</span>
                {isHeartVisible && <IconHeart />}
              </StyledButton>
            </ButtonBox>
          </IntroTextButton>
        </IntroContentBox>
      )}
    </Page>
  );
};

export default Introduction;
