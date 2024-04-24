import { useState, useEffect } from "react";
import { Page, StyledText, StyledH1, StyledButton, ButtonBox, Container, StyledImage } from "../StyledComponents";
import { IconHeart, LogoContainer, IntroTextBox, IntroContentBox } from "../StyledIntro";
import ImgIntro from "../../assets/intro-one.jpg";

const Introduction = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHeartVisible, setIsHeartVisible] = useState(true);
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 350) {
        setDeviceType("none");
      } else if (width >= 350 && width <= 650) {
        setDeviceType("mobile");
      } else if (width <= 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
    setIsHeartVisible((prevIsHeartVisible) => !prevIsHeartVisible);
  };

  return (
    <Page>
      <LogoContainer></LogoContainer>
      <Container>
        <IntroContentBox>
          <StyledImage src={ImgIntro} alt="Introduction Image" />

          <IntroTextBox>
            {deviceType === "none" && (
              <div>
                <StyledH1>Congratulations!</StyledH1>
                <StyledText>
                  You&apos;re unable to access this website on your current phone. But fear not! We are looking for
                  individuals like you to participate in our Midsommar yoga event. So, simply invite a friend with a
                  newer phone to access this page, and if they succeed, you&apos;ll get 1 ticket for free. Just remember
                  to insert the code DSFHSIUG!
                </StyledText>
              </div>
            )}
            {deviceType !== "none" && (
              <>
                <StyledH1>Celebrate Midsommar with yoga and friends</StyledH1>
                <StyledText>
                  Embrace summer vibes doing yoga among friends. Experience energising asanas under the sun and feed
                  your mind with a relaxing meditation. Afterwards, indulge in prosecco and delectable treats to
                  celebrate the harmony of body and mind.
                </StyledText>
              </>
            )}
          </IntroTextBox>
          {deviceType !== "none" && (
            <ButtonBox>
              <StyledButton
                $backgroundColor="#F65135"
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
          )}
        </IntroContentBox>
      </Container>
    </Page>
  );
};

export default Introduction;
