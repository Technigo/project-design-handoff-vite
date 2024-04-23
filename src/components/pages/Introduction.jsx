import { useState, useEffect } from "react";
import { Page, StyledText, StyledH1, StyledButton } from "./StyledComponents";
import {
  StyledIntro,
  LogoContainer,
  IntroContainer,
  IntroTextBox,
  IntroContentBox,
  StyledIntroImage,
} from "../StyledIntro";
import ImgIntro from "../../assets/jaspinder-singh-dtm8XNpMqGs-unsplash.jpg";

const Introduction = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHeartVisible, setIsHeartVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false); //

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 349);
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
      <IntroContainer>
        <IntroContentBox>
          <StyledIntroImage src={ImgIntro} alt="Introduction Image" />

          <IntroTextBox>
            {isMobile ? (
              <>
                <StyledH1>Congratulations!</StyledH1>
                <StyledText>
                  Youre unable to access this website on your current phone. But fear not! We are looking for
                  individuals like you to participate in our Midsommar yoga event. So, simply invite a friend with a
                  newer phone to access this page, and if they succeed, you&apos;ll get 1 ticket for free. Just remember
                  to insert the code DSFHSIUG!
                </StyledText>
              </>
            ) : (
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
          <div className="knappbox">
            <StyledButton className={`heartIcon ${isClicked ? "clicked" : ""}`} onClick={handleClick}>
              <span className={`book ${isClicked ? "clicked" : ""}`}>BOOK YOUR SPOT</span>
              {isHeartVisible && <StyledIntro />}
            </StyledButton>
          </div>
        </IntroContentBox>
      </IntroContainer>
    </Page>
  );
};

export default Introduction;
