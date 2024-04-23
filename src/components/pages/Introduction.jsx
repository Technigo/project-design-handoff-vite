import { useState } from "react";
import { Page, StyledText, StyledH1, StyledButton } from "./StyledComponents";

import { StyledIntro, LogoContainer } from "../StyledIntro";

const Introduction = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHeartVisible, setIsHeartVisible] = useState(true);

  const handleClick = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
    setIsHeartVisible((prevIsHeartVisible) => !prevIsHeartVisible);
  };

  return (
    <Page>
      <LogoContainer></LogoContainer>
      <StyledH1>Celebrate Midsommar with yoga and friends</StyledH1>
      <StyledText>
        Embrace summer vibes doing yoga among friends. Experience energising asanas under the sun and feed your mind
        with a relaxing meditation. Afterwards, indulge in prosecco and delectable treats to celebrate the harmony of
        body and mind.
      </StyledText>

      <StyledButton className={`heartIcon ${isClicked ? "clicked" : ""}`} onClick={handleClick}>
        <span className={`book ${isClicked ? "clicked" : ""}`}>BOOK YOUR SPOT</span>
        {isHeartVisible && <StyledIntro />}
      </StyledButton>
    </Page>
  );
};

export default Introduction;
