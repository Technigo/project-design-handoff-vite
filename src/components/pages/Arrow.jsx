import { useState, useEffect } from "react";
import { ArrowBox, ArrowIcon } from "../StyledArrow";
import { Page, StyledText } from "../StyledComponents";

const Arrow = () => {
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

  const handleArrowClick = () => {
    window.scrollTo({
      top: window.scrollY + 600,
      behavior: "smooth",
    });
  };

  if (deviceType === "none") {
    return null;
  }

  return (
    <Page>
      <ArrowBox>
        <StyledText>Find out more about event</StyledText>
        <ArrowIcon onClick={handleArrowClick} />
      </ArrowBox>
    </Page>
  );
};

export default Arrow;
