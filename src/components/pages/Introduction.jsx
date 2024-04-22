import { useState } from "react";

import LogoMobile from "../../assets/LogoMobile.svg";
import LogoTablet from "../../assets/LogoTablet.svg";
import LogoDesktop from "../../assets/LogoDesktop.svg";
import { StyledIntro } from "../StyledIntro";

const Introduction = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHeartVisible, setIsHeartVisible] = useState(true);

  const handleClick = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
    setIsHeartVisible((prevIsHeartVisible) => !prevIsHeartVisible);
  };

  return (
    <div className="page">
      <div className="logo logo-mobile">
        <LogoMobile />
      </div>
      <div className="logo logo-tablet">
        <LogoTablet />
      </div>
      <div className="logo logo-desktop">
        <LogoDesktop />
      </div>
      <div className={`heartIcon ${isClicked ? "clicked" : ""}`} onClick={handleClick}>
        <span className={`book ${isClicked ? "clicked" : ""}`}>BOOK YOUR SPOT</span>
        {isHeartVisible && <StyledIntro />}
      </div>
    </div>
  );
};

export default Introduction;
